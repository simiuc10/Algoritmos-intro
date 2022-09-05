import java.util.HashSet;
import java.util.Set;

public class colecciones2 {
    public  static void main(String[] args){
        //SET
        //HashSet

        Set<String> miSet = new HashSet<>();

        //Set no permite elementos duplicados
        miSet.add("Tsunade");
        miSet.add("Sarada");
        miSet.add("Ino");
        miSet.add("hinata");
        miSet.add("hinata");
        miSet.add("hinata");
        miSet.add("hinata");

        miSet.remove("hinata");


        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("hinata"));

        for(String nombre : miSet){
            System.out.println(nombre);
        }

    }

}
