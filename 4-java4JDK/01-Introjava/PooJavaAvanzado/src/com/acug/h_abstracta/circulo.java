package com.acug.h_abstracta;

public class circulo extends FigurasGeometricas {
    private float radio;
        @Override
        public float area(){
            return (float) (Math.PI * Math.pow(radio, 2));
        }

    public circulo(float radio) {
        this.radio = radio;
    }
}
