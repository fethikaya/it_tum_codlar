package com.security.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration  // Guvenlik ile alakalı kutuphane
@EnableWebSecurity //Şifre konmasını sağlar

@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ScurityConfiguration extends WebSecurityConfigurerAdapter {

    // SecrtiyConfiguration classın constuctoru.
    // PasswordConfig calssını burada kullanmak için kulandık.
    // çağırdık

    @Autowired
    private PasswordEncoder passwordEncoder;
    public ScurityConfiguration (PasswordEncoder passwordEncoder){
        this. passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
     //   http.authorizeRequests().anyRequest().permitAll();
        // Şirelemeyi devre dışı bırakmak için

       // csrf().disable().       // Cross-Site-Request-Forgery disable yaptık
                                // disable yapınca güvenlik ortadan kalkar. Artık site güvenli değil
                                // csrf ()  default olarak konulur. biz disable yapmasak otomatik korunur.
        // Şifre vermek için
        http.authorizeRequests(). // istekleri denetle
                antMatchers( "/", "index","/css/*", "/js/*").permitAll().
                // Yukarıda yazdığız sayflara şifresiz girişe izin ver

                //======================= ROLE- BASED AUTHENDICATION=========

                antMatchers("/kisiler/ara/**").hasRole(KisiRole.USER.name()).
                // user rolune sahip kulanıcının erişebileceği path'ın tanımlanması
               antMatchers("/kisiler/**").hasRole(KisiRole.ADMIN.name()).
                // Admin roluna sahip olan kullancıların erişebileceği path in tanımlanması
                        // ** herşeye izin veriyor

/*

                //======================= METHOD- BASED AUTHENDICATION=========

                 Metot-tabanlı kimlik denetimi için yapılması gereken adımlar.
                   1- @EnableGlobalMethodSecurity(prePostEnabled = true) anotasyonunun Security
                      class'ına konulması gerekir.
                   2- Rollerin ROLE_ISIM şeklinde tanımlanması gerekir. Bunlar hard-coded olabileceği
                      gibi KisiRole içerisinde varolan rollerin kullanılmasi ile de olabilir.
                      Tabi bunun için Enum olan role isimleri ile sabit "ROLE_" kelimesini birleşirecek bir
                      metot yazmak gerekir. Methodu kişi roll klassın içinde yazacığız
                   3- UserDetailService metodu içerisinde kişilerin roles() tanımlamalarını authorities() olarak ,
                      değiştirmeli ve KisiRole isimlerini ROLE_ISIM şeklinde almak için KisiRole içerisinde yazdığımız
                      metotu kullanmalıyız.
                   4- İzinleri ayarlamak için KisiContorller'a giderek metot başına hangi Rollere izin verileceğini
                      belirlemek gerekmektedir.Bunun için  @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
                      anotasyonu kullanılabilir.

     */


                anyRequest().           // tum istekleri
                authenticated().        // Şifreli olarak kullan
                and().                  // VE farklı işmleri birleştirmek için
                httpBasic().and().      // basic http kimlik denetimini kullan
                formLogin().            // form login sayfasi giriş yapılsin
                loginPage("/login").permitAll().    // kendi login sayfamızı kullanalım.
                defaultSuccessUrl("/success").  // Sayfaya başarıyla giriş yaptigina dair rapor bilgi verir

                logout().                       //logout yapılınca şifre vb. bilgileri sil.
                clearAuthentication(true).      // şifrelemeleri sil.
                invalidateHttpSession(true).    // Http oturmunu bitir
                deleteCookies("JESSIONID").     // session id'yi sil
                logoutSuccessUrl("/login");    // logout sorasında tekrardan login'e yönlendir.

        /*
        kendi login sayfamızı kullanmak için:
        1- WebApp klasöründe yeni bir login.html sayfası oluşturulur
        2- HomeController icerisinde bir RequestMapping metdhodu ile path tanımlanır.
        3- SecurtyConfiig içersinde loginPage(/login) methodu ile aktif hale getirliir.
            loginPage("/login").permitAll();
        */

    }

    // Kullanıcı oluşturma
    @Override
    @Bean
    // Nesneleri oluştururken bir anitsyon istiyor. Bunlar dışında nesne oluşturulursa @Bean kullanmak gerekir.

    protected UserDetailsService userDetailsService() {
        UserDetails user1 = User.builder().
                username("fethi").
                password(passwordEncoder.encode("12345")).
                // şifreyi güvenlik altına aldık. PasswordConfig classını burada kulandık
             //      roles("USER").  // Otomatik atanırsa bunu kullanıyoruz. Ama biz kendimiz aşağıda atıyoruz
             //       authorities(KisiRole.ADMIN.name()).build();
                     authorities(KisiRole.USER.otoriteleriAl()). build();

                        // KişiRole de tanımladığımız rolu buraya getirip kullandık.

        // user1 adında bir user oluşturup, kullanıcı adı ve şifre belirledik

        UserDetails admin1 = User.builder().
                username("admin").
               // password("6789").
                password(passwordEncoder.encode("6789")). // şifreyi güven altına aldık.
         //       roles("ADMIN").
         //       authorities(KisiRole.ADMIN.name()).build();

                authorities(KisiRole.ADMIN.otoriteleriAl()).build();

        return new InMemoryUserDetailsManager(user1,admin1);
    }

}
