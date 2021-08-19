package com.security.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


// ScrutyConfiguratin da oluşturduğumuz user ve şifreyi de şifrelemek için bu classı oluşturduk
@Configuration
public class PasswordConfig {
    @Bean
    public PasswordEncoder passwordEncoder (){
        return new BCryptPasswordEncoder(10);
    }
}
