import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Diccionario {
    public  static void main (String [] args){

        Map<String,String> diccionario = new HashMap<>();

        diccionario.put("numero","number");
        diccionario.put("palabra","word");
        diccionario.put("pais","country");
        diccionario.put("cartera","wallet");
        diccionario.put("reloj","watch");

        diccionario.put("lunes","monday");
        diccionario.put("martes","tuesday");
        diccionario.put("miercoles","saturday");
        diccionario.put("jueves","wednesday");
        diccionario.put("viernes","");

        diccionario.put("libro","book");
        diccionario.put("diccionario","dictionary");
        diccionario.put("lentes","glasses");
        diccionario.put("pluma","pen");
        diccionario.put("agua","water");

        diccionario.put("once","eleven");
        diccionario.put("doce","twelve");
        diccionario.put("trabajo","job");
        diccionario.put("profesor","teacher");
        diccionario.put("red","rojo");

        Random aleatorio = new Random();
        int ran = aleatorio.nextInt(20)+1;
        //System.out.println(ran);

        /*for (int i = 0; i <= 5; i++){
            int ran = aleatorio.nextInt(20)+1;
            Int numerosRand = ran;
            System.out.println(numerosRand);
        }*/
        Object pabalbraAtraducir = diccionario.keySet().toArray()[ran];
        System.out.println(pabalbraAtraducir);
        String valor = diccionario.get(pabalbraAtraducir);
        //System.out.println(diccionario.get(hola));

        Scanner input = new Scanner(System.in);
        System.out.println("Ingresa la palabra en ingles");
        String ingresado = input.next();

        if (valor.equals(ingresado)){
            System.out.println("correcto");
        } else {
            System.out.println("incorrecto");
        }

    }
}
