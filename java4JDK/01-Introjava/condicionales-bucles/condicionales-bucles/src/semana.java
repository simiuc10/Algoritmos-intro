public class semana {
    public static void main(String[] args){
        System.out.println("semana");

        Scanner sc = new Scanner(System.in);
        System.out.println("Escibre un numero: ");
        byte diaSemana = sc.nextByte();

        switch (diaSemana){

            case 1:
                System.out.println("se escribio un uno");
                break;
            case 2:
                System.out.println("Se escribio un dos");
                break;
            default:
                System.out.println("no entendi");

        }
    }

}
