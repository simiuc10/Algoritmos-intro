package com.acug.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){


    }
    public void visualizarA(){
        System.out.println("soy un metodo de la clase base padre");

    }
    public void visualizarABC(){
        System.out.println("soy el visualizador abc");

    }

    public int getA() {
        return  a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}



