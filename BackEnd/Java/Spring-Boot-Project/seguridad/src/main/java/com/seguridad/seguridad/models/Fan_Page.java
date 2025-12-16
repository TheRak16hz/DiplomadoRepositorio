package com.seguridad.seguridad.models;

import java.sql.Date;
import jakarta.persistence.Column; // ¡Importación Necesaria!
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "fan_page", schema = "perfil_empresarial")
public class Fan_Page {

    // --- CORRECCIÓN CLAVE: Ser explícito con @Column y @GeneratedValue ---
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Asumiendo que es autoincremental
    @Column(name = "cod_fan_page") 
    private int cod_fan_page;

    @Column(name = "nom_fan_page")
    String nom_fan_page;
    
    @Column(name = "des_fan_page")
    String des_fan_page;
    
    @Column(name = "per_fan_page")
    String per_fan_page;
    
    @Column(name = "fec_fan_page")
    Date fec_fan_page;
    
    @Column(name = "est_fan_page")
    String est_fan_page;

    //Constructor vacio
    public Fan_Page() {
    }

    //constructor completo
    public Fan_Page(int cod_fan_page, String nom_fan_page, String des_fan_page, String per_fan_page, Date fec_fan_page,
            String est_fan_page) {
        this.cod_fan_page = cod_fan_page;
        this.nom_fan_page = nom_fan_page;
        this.des_fan_page = des_fan_page;
        this.per_fan_page = per_fan_page;
        this.fec_fan_page = fec_fan_page;
        this.est_fan_page = est_fan_page;
    }

    //getters y setters
    public int getCod_fan_page() {
        return cod_fan_page;
    }

    public void setCod_fan_page(int cod_fan_page) {
        this.cod_fan_page = cod_fan_page;
    }

    public String getNom_fan_page() {
        return nom_fan_page;
    }

    public void setNom_fan_page(String nom_fan_page) {
        this.nom_fan_page = nom_fan_page;
    }

    public String getDes_fan_page() {
        return des_fan_page;
    }

    public void setDes_fan_page(String des_fan_page) {
        this.des_fan_page = des_fan_page;
    }

    public String getPer_fan_page() {
        return per_fan_page;
    }

    public void setPer_fan_page(String per_fan_page) {
        this.per_fan_page = per_fan_page;
    }

    public Date getFec_fan_page() {
        return fec_fan_page;
    }

    public void setFec_fan_page(Date fec_fan_page) {
        this.fec_fan_page = fec_fan_page;
    }

    public String getEst_fan_page() {
        return est_fan_page;
    }

    public void setEst_fan_page(String est_fan_page) {
        this.est_fan_page = est_fan_page;
    }
}