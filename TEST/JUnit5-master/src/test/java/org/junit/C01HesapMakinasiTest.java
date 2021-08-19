package org.junit;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class C01HesapMakinasiTest {

    @Test
    @DisplayName("iki sayiyi toplar")
    void topla() {
        assertEquals(4, C01HesapMakinasi.topla(2,2));
        assertEquals(2, C01HesapMakinasi.topla(3,-1));
        assertEquals(-1, C01HesapMakinasi.topla(-2,1));
        assertEquals(-5, C01HesapMakinasi.topla(-2,-3));
    }
    @Test
    @DisplayName("iki sayiyi carpar")
    void carp() {
        assertAll(() -> assertEquals(4, C01HesapMakinasi.carp(2,2)),
                    () -> assertEquals(-3, C01HesapMakinasi.carp(3,-1)),
                    () -> assertEquals(-2, C01HesapMakinasi.carp(-2,1)),
                    () -> assertEquals(6, C01HesapMakinasi.carp(-2,-3)));
    }
}