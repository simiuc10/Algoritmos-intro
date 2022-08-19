import java.util.Scanner;

public class Edad {
    public static void main(String[] args){

        //Determinar si una es mayor de edad
        // tener la edad - pedir al usuario
        //condicional para saber si es menor de 18


        Scanner escaner= new Scanner(System.in); // instanciar
        System.out.println("escibre tu edad");
        int edad = escaner.nextInt();
        escaner.close();

        System.out.println(edad);

        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        String resultado = (edad >= 18) ? "eres mayor de edad" : " Eres menor de edad";
        System.out.println(resultado);


    }
}
