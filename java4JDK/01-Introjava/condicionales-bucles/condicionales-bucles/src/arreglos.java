public class arreglos {
    public static void main(String[] args) {


        int[] numeroAleatorios = {1, 2, 3, 4, 5, 6};
        String[] valores = {"hola", "adios", "etc"};

        char[] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] =  'o';
        caracteres[2] =  'l';
        caracteres[3] =  'a';

        valores[2] = "Valor cambiado";

        System.out.println(numeroAleatorios.length);
        System.out.println(valores[1]);
        System.out.println(caracteres);

        for(String elemento : valores){
            System.out.println(elemento);
        }

        for(int numero : numeroAleatorios){
            System.out.println(numero);
        }

    }

}