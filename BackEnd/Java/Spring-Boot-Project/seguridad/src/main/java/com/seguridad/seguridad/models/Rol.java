package com.seguridad.seguridad.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@entity le dice a java que la clase rol esta relacionada con una tabla en la BD
//cada fila de la tabla 'rol' se convertira en un objeto de la clase rol

@Table(name = "rol", schema = "seguridad")
//debo indicarle el esquema y la tabla con lacual va a estar enlazada la clase rol
public class Rol {
    // se colocan como atributos los nombres de cada una de las columnas de la tabla
    @Id
    @Column(name = "cod_rol")
    private int cod_rol;

    @Column(name = "nom_rol")
    private String nom_rol;

    @Column(name = "des_rol")
    private String des_rol;

    @Column(name = "est_rol")
    private String est_rol;


    //Metodos Constructores
    public Rol() {
    }

    public Rol(int cod_rol) {
        this.cod_rol = cod_rol;
    }

    public Rol(String nom_rol, String des_rol, String est_rol) {
        this.nom_rol = nom_rol;
        this.des_rol = des_rol;
        this.est_rol = est_rol;
    }

    public Rol(int cod_rol, String nom_rol, String des_rol, String est_rol) {
        this.cod_rol = cod_rol;
        this.nom_rol = nom_rol;
        this.des_rol = des_rol;
        this.est_rol = est_rol;
    }

    //Metodos Getters y Setters
    public int getCod_rol() {
        return cod_rol;
    }

    public void setCod_rol(int cod_rol) {
        this.cod_rol = cod_rol;
    }

    public String getNom_rol() {
        return nom_rol;
    }

    public void setNom_rol(String nom_rol) {
        this.nom_rol = nom_rol;
    }

    public String getDes_rol() {
        return des_rol;
    }

    public void setDes_rol(String des_rol) {
        this.des_rol = des_rol;
    }

    public String getEst_rol() {
        return est_rol;
    }

    public void setEst_rol(String est_rol) {
        this.est_rol = est_rol;
    }
}


