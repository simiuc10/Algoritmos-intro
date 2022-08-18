public class EjemploString {
    public static void main (String[] args){
        String curso = "curso en java";
        System.out.println("curso = " + curso);
        String nombre = "Sarada Uchiha";
        String resultado = new String ("curso en java");
        System.out.println("resultado = " + resultado);

        boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);

        esigual= curso.equals(resultado);
        System.out.println("esigual = " + esigual);

        String concat = curso + " con " + nombre;
        System.out.println("concat = " + concat);
        String dia = "Jueves";
        String concat1 = concat.concat("con").concat(dia);

        System.out.println("concat1 = " + concat1);

    }
}
