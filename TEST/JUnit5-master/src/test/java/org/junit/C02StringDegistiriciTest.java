package org.junit;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class C02StringDegistiriciTest {

    C02StringDegistirici strDegistirici;

    @BeforeEach
    void setUp() {
      strDegistirici = new C02StringDegistirici();
      System.out.println("Test verisi oluşturuldu..");
    }

    @AfterEach
    void tearDown() {
        strDegistirici = null;
        System.out.println("Test verisi silindi..");
    }

    @ParameterizedTest
    @CsvSource(value ={"BC, AABC","BC, ABC", "BCDE,BCDE","'' ,AA", "'',A","B,B","B, AB"})
    void ilkIkiASil(String kirpilmisGirdi, String girdi) {
        assertEquals(kirpilmisGirdi, strDegistirici.ilkIkiASil(girdi));
        System.out.println("Silme metodu calisti");
    }
}