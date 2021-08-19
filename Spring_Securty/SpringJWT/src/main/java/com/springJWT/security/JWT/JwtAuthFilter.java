package com.springJWT.security.JWT;

import com.springJWT.service.KisiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    KisiService kisiService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        try{
            // Request içeresindeki Header'a git ve Authorization kısmındaki token'ı ayıkla
            String jwt = jwtAl(request);

            // Token'ı geçerle
            if (jwt !=null && jwtUtils.JwtTokenGecerle(jwt)) {
                String username = jwtUtils.usernameVePasswordAl(jwt);

                // İstekte bulunan kisinin bilgilerini Service layer'dan getir
                UserDetails kisiDetayar = kisiService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken
                                (kisiDetayar, null, kisiDetayar.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // Kimlik denetim bilgilerini tutan Security Context'in güncellenmesi
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            }catch(Exception e){
                System.out.println("Kimlik denetimi gercekleştirelemedi" + e.getMessage());
            }
        filterChain.doFilter(request, response);
        }


    public String jwtAl (HttpServletRequest request){
        String headerAuth = request.getHeader("Authorization");
        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")){
        return headerAuth.substring(7,headerAuth.length());
    }
    return null;
}
}