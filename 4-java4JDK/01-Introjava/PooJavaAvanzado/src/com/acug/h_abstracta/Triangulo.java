package com.acug.h_abstracta;

public class Triangulo extends FigurasGeometricas {
    private float base;
    private float altura;

    private Triangulo() {

    }

    public Triangulo(float base, float altura){
        this.base = base;
        this.altura = altura;
    }

    @Override
    public float area(){
    return (getBase()*getAltura(2))/2;
}

public float getBase(){
    return base;
}

public void setBase(float base){
    this.base = base;
}

public  float getAltura(int i){
    return altura;
}

public void setAltura(float altura){
    this.altura = altura;
}

}

