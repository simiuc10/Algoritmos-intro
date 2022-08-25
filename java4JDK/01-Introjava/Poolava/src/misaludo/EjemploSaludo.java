import saludo;

package misaludo;
public class EjemploSaludo {
    public static void main(String [] args){

        saludo objSaludo;
        objSaludo = new saludo();
        objSaludo.saludar();
        
        saludo objSaludo0 = new saludo();
        System.out.println("este es otro objeto: -> " + objSaludo.saludar0());
        


    }
}
