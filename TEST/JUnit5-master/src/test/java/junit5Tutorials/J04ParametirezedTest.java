package junit5Tutorials;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class J04ParametirezedTest {
     /*
        lenght() metodunun aşağıdaki koşullar için 0'dan büyük değer döndürüp döndürmediğini test ediniz.
         Koşullar: ABCD, ABC, A, ABCDE
    */

    // ÖNERİLMEZ
    @Test
    void uzunlukSifirdanBuyukMu() {
        assertTrue("ABCD".length()>0);
        assertTrue("ABC".length()>0);
        assertTrue("A".length()>0);
        assertTrue("ABCDEF".length()>0);
    }

    @ParameterizedTest
    @ValueSource(strings = {"ABCD", "ABC","A", "ABCDEF" })
    void uzunlukSifirdanBuyukMuParametreli(String str){
        assertTrue(str.length()>0);
    }

    @ParameterizedTest(name= " Buyuk Harf: {0}, Cevrilecek: {1}")
    @CsvSource(value = {"ABCD , abcd" , "ABC, aBC", "A, a" })
    void buyukharfeCevirmeTesti(String expectedUpperCase, String str){
        assertEquals(expectedUpperCase, str.toUpperCase());
    }

    // Bir CSV dosyasındaki verileri okuyarak test işlemini gerçekleştirilebilir.
    // Bunun için @CsvFileSource anotasyonu kullanılır.
    // Veri dosyası src/test/resources klasörü altına konulur ise doğrudan erişim sağlanabilir.
    // numLinesToSkip = 1 ile başlangıç starırından itibaren dikkate alınamyacak satır dayısı belirtir.
    @ParameterizedTest
    @CsvFileSource(resources = "/data.csv", numLinesToSkip = 1)
    void upperCaseFromCsvFile(String kelime, String buyukHarf){
        assertEquals(buyukHarf,kelime.toUpperCase());
    }







}
