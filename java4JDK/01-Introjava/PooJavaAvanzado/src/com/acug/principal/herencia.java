package com.acug.principal;

import com.acug.herencia.BasePadre;
import com.acug.herencia.Hija;
import com.acug.herencia.Hijo;

public class herencia {
    public static void main(String[] args) {
       Hija h = new Hija();
       h.visualizarA();
       Hijo ho = new Hijo();
       ho.setA(14689);
       ho.visualizarABC();

       BasePadre obj = new BasePadre();
       obj.setA(2357);

        System.out.println("atributo de clase base padre ->" + obj.getA());
        System.out.println("atributo de clase hijo -> " + ho.getA());


    }
}
