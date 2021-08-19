package junit5Tutorials;

import org.junit.jupiter.api.Test;

import java.time.Duration;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class J06PerformanceTest {
    @Test
    void performance(){
       assertTimeout(Duration.ofMillis(10), () -> LongStream.rangeClosed(0, 1000000).sum());
//        assertTimeout(Duration.ofMillis(10), () -> DoubleStream.iterate(1, t->t+1).
//                limit(1000000).sum());
    }
}
