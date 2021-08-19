
package com.security.configuration;

import com.google.common.collect.Sets;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import static com.security.configuration.KisiPermission.*;
import java.util.Set;
import java.util.stream.Collectors;


// Bu bir Enume dir. Class değil
// Sabit veriler için kullanılr
// Görevlendirme için bu classı oluşturduk

public enum KisiRole {
    USER(Sets.newHashSet(USER_READ)),
    ADMIN(Sets.newHashSet(ADMIN_READ, ADMIN_WRITE));
    private Set<KisiPermission> kisiPermission;

    public Set<KisiPermission> getKisiPermission() {
        return kisiPermission;
    }


    KisiRole(Set<KisiPermission> kisiPermission){
        this.kisiPermission = kisiPermission;
    }

    //******************************

    // METHOD - BASED authenteication işlemi için rolbirleştirme methodu

    public Set <SimpleGrantedAuthority> otoriteleriAl(){

        // Kişi'nin izinlerini  alıp SimpleGrantedAutohirty calss'ına çevirerek
        // permission adında bir Set'e kayd ettik.
        Set <SimpleGrantedAuthority> permission = getKisiPermission().
                stream().
                map(x-> new SimpleGrantedAuthority(x.getPermission())).
                collect(Collectors.toSet());

        // Permission set'i içiresindeki izinleri "ROLE_" sabit kelimesi ile birleştirir.
        permission.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permission;
    }

}


