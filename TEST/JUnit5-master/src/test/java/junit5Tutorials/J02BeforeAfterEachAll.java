package junit5Tutorials;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class J02BeforeAfterEachAll {

    /* =========================================== @BeforeEach - @AfterEach ============================================

    A-) @BeforeEach anatosyonu kullanılan bir metot, her test metodu çalışmadan önce çalıştırılır.
        Bu özelliği sayesinde test verilerinin ayarlanması (başlatılması) için kullanılabilir.

	B-) @AfterEach anatosyonu kullanılan bir metot, her test metodu bittikten sonra çalıştırılır.
        Bu özelliği sayesinde test verilerinin temizlenmesi için kullanılabilir.

	C-) JUnit4 de bu anatosyonlar yerine @Before ve @After kullanıyordu.

	/* ========================================== @BeforeAll - @AfterAll ===============================================
	 A-) @BeforeALl tüm test metotlarından önce çalışan bir metot oluşturmak için kullanılır.
         Dolayısıyla veritabanı içeren bir test işleminde ilk olarak veritabanına bağlanamk gerekeceğinden @BeforeAll
         anatosyonu ile bir metot tanımlanarak ilk olarak veritabanına bağlanam prosedürü işletilebilir.

	 B-) @AfterAll ile tüm test metotlari bittikten sonra çalışan bir metot oluşturulabilri.
         Bu özelliği sayesinde testler bittikten sonra veritabani oturumu kapatılabilir.

	    Not1: @BeforeAll ve @AfterAll anotasyonlarının kullanıldığı metotlar static olmalıdır.
	    Not2: JUnit4 de @BeforeClass ve  @AfterClass metotları kulanılmaktadı.
    */

    @BeforeAll
    static void veritabaniBaglantiKur(){
        System.out.println("Veritabani baglantisi kuruldu..");
    }

    @AfterAll
    static void veritabaniBaglantiKapat(){
        System.out.println("Veritabani baglantisi kapatildi.");
    }

    String str = "";

    @BeforeEach
    void setUp(TestInfo info){
        str = "Junit5 ile Unit test yapalim";
        System.out.println(info.getDisplayName() + " SETUP METODU CALISTI");
    }

    @AfterEach
    void clean(TestInfo info){
        str = "";
        System.out.println(info.getDisplayName() + " CLEAN METODU CALISTI");
    }

    @Test
    @DisplayName("lenght metot testi")
    void testStringLenghtTesting(){
        int actual = str.length();
        int expected = 28;
        assertEquals(expected,actual,"Eşit değil");
        System.out.println("LENGHT METODU CALISTI");
    }

    @Test
    @DisplayName("split metodu ile String dizi testi")
    void testWithArrays(){
        String actual[] = str.split(" ");
        String expected[]= {"Junit5", "ile", "Unit", "test", "yapalim"};

        // assertArrayEquals()
        assertArrayEquals(expected,actual,"Diziler birbirine eşit çikmadi");
        System.out.println("SPLIT METODU CALISTI");
    }
}
