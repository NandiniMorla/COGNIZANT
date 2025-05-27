import java.util.*;

record Person(String name, int age) {}

            new Person("Nandini", 21),
            new Person("Raj", 18),
            new Person("Sara", 25)
        );

        people.stream()
            .filter(p -> p.age() > 20)
            .forEach(System.out::println);
    }
}
