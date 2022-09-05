package MetPrincipal;

import MenuP.MenuOP;

public class EjecutaT {
    
    public static void main(String [] args){

        MenuOP menuOP = new MenuOP();
        menuOP.menu();
        int op = 1;
        switch (op){
            case 1:
                Saludo s = new saludo();
                s.saludar();
        }



    }


}
