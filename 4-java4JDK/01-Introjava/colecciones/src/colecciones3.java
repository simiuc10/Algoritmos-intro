import java.util.*;

public class colecciones3 {
    public static void main(String[] args){
        //int -> Integer
        //char -> Character
        //float -> Float
        //double -> Double

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("tostadas");
        comidas.add("ceviche");
        comidas.add(2, "esquite");

        System.out.println(comidas);

        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3));
        System.out.println(numeros);

        System.out.println("----------");
        System.out.println("HashSet");

        Set<String> ciudades = new HashSet<>();
        ciudades.add("CDMX");
        ciudades.add("EDOMEX");
        ciudades.add("GDL");

        System.out.println(ciudades);

        Map<Integer, String> alumnos = new HashMap<Integer, String>();
        alumnos.put(1,"Ino");
        alumnos.put(2,"Sarada");
        alumnos.put(3, "Tsunade");
        alumnos.put(4, "Hinata");
        alumnos.put(5, "Sakura");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values()); //lista de valores
        System.out.println(alumnos.keySet()); // lista de las llaves
        System.out.println(alumnos.get(2));

        Object llaves = alumnos.keySet().toArray()[5];
        System.out.println(alumnos.get(llaves));


    }
}
