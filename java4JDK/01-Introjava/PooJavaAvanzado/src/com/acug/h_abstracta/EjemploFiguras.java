package com.acug.h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0, 0);
        t.setBase(5);
        t.getAltura(2);
        System.out.println("t es el objeto de trinagulo = " + t.area());

        circulo c = new circulo();
        System.out.println("c.area() calcula el area del circulo = " + c.area());

    }
}
