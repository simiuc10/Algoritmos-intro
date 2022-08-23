import java.util.ArrayList;
import java.util.List;

public class colecciones {
    public  static void main(String[] args){
        //List -- ArrayList
        //-Los valores ordenan segun el roden en que los agregemos


        List<String> meses = new ArrayList<String>();

        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1,"Abril");

        String mes = meses.remove(3);

        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0));
        System.out.println(meses.size());

        for(String elemento : meses){
            System.out.println(elemento);
        }

        //List<int> numeros = new ArrayList<int>();

        int numero1 = 10;
        Integer num2 = 10;

        System.out.println(numero1 + 10);
        System.out.println(num2 + 15123);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);

        System.out.println(numeros);

    }
}
