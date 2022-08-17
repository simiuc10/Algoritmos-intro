public class ejemploVariables {
    public static void main(String[] args) {
        String nombre = "sarada";
        String saludo = "Hola mucho gusto";

        System.out.println(saludo + " " + nombre);
        char espacio = '\u0023';
        char caracter = 'a';
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo: " + Character.MAX_VALUE);
        System.out.println("char valor minimo: " + Character.MIN_VALUE);

        int numeroEntero = 10;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        float numeroFloat = 5;
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDoble = 3.444567E39;
        System.out.println("numeroDoble = " + numeroDoble);
        System.out.println("doble corresponde en byte: " + Double.BYTES);
        System.out.println("doble corresponde en bits: " + Double.SIZE);
        System.out.println("doble valor maximo: " + Double.MAX_VALUE);
        System.out.println("doble valor minimo: " + Double.MIN_VALUE);

        boolean valorBoolean = true;
        System.out.println("valorBoolean = " + valorBoolean);
        System.out.println("boolean corresponde en byte: "+ Boolean.BYTES);
        System.out.println("boolean corresponde en bits: " + Boolean.SIZE);
        System.out.println("boolean valor maximo: " + Boolean.MAX_VALUE);
        System.out.println("boolean valor minimo: " + Boolean.MIN_VALUE);

        


    }
}
