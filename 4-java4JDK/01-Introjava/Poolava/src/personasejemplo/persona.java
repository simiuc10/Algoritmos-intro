package personasejemplo;

public class persona {
    

    public class Persona {

       private String nombre = "Sarada";
       private int edad = 18;
       private int nss = 321654879;

        Persona (){


        }

        

        public Persona(String nombre, int edad, int nss) {
            this.nombre = nombre;
            this.edad = edad;
            this.nss = nss;
        }




        void caminar() {
            System.out.println("de vez en diario");
        }


        void dormir() {
            System.out.println("a partir de las 3am");
        }







}



}
