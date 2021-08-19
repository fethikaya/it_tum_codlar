package junit5Tutorials;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class J01Assertions {

    @Test
    @DisplayName("lenght metot testi")
    void testToAssert() {
        int actual = "ABCDE".length();
        int expected = 4;

        // 1. assertEquals()
        // Beklenen, gerçekleşene eşit  ise test başarılı
//        assertEquals(expected,actual,"Beklenen ve gerçek değerler eşit değil");

        //inline
//        assertEquals(4,"ABCDE".length(),"Beklenen ve gerçek değerler eşit değil");

        //2.assertNotEquals()
        // Beklenen, gerçekleşene eşit değil ise test başarılı
        assertNotEquals(expected,actual, "NOT: Değerler eşit olmamalıydı");

        //3.assertTrue()
        // Şart doğru ise test başarılı olmalı
        expected = 5;
        assertTrue(actual==expected, "TRUE:Degerler eşit cikmadi");

        //4.assertFalse()
        // Şart yanlış ise test başarılı olmalı
        expected = 4;
        assertFalse(actual==expected, "FALSE:, Degerlerin farklı olması bekliniyorken eşit çiktı");
    }

    @Test
    @DisplayName("toUppercase metot testi")
    void testToConvertUpper(){
        String actual = "abcd".toUpperCase();
        String expected ="ABCD";
        assertEquals(expected,actual,"EQUAL: Eşit değil" );
        assertTrue(actual.equals(expected), "TRUE: Eşit değil");

        //assertNull() parametre Null ise testi basarili say.
        actual =null;
        assertNull(actual, "NUll: Sonuc NULL değil");

        //assertNotNull() parametre Null değil ise testi basarili say.
        actual ="ABCD";
        assertNotNull(actual, "NUll: Sonuc NULL");
    }

    @Test
    @DisplayName("Contain metot testi")
    void testToContain(){
        boolean actual = "abcd".contains("hi");
        boolean expected = false;
        assertEquals(expected, actual,"String hi içeriyor fakat içermemeliydi");
    }

    @Test
    @DisplayName("split metodu ile String dizi testi")
    void testWithArrays(){
        String str = "Junit5 ile Unit test yapalim";
        String actual[] = str.split(" ");
        String expected[]= {"Junit5", "ile", "Unit", "test", "yapalim"};

        // assertArrayEquals()
        // diziler bir birine eşit ise testi başarılı say.
        assertArrayEquals(expected,actual,"Diziler birbirine eşit çikmadi");
    }
}
