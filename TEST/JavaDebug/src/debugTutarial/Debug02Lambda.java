package debugTutarial;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Debug02Lambda {
    public static void main(String[] args) {
        metot();
    }
    public static void metot(){
        List<Integer> sonuc = Stream.of(1,2,3,4,5,6,7,8,9, 10).
                filter(i -> i%2 ==0).map(i -> i*2).
                collect(Collectors.toList());
        System.out.println(sonuc);
    }
}