package com.seguridad.seguridad.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "usuario", schema = "seguridad")
public class Usuario {
    
    @Id
    @Column(name = "cod_usu")
    private int cod_usu;

    @Column(name = "ali_usu")
    private String ali_usu;

    @Column(name = "ema_usu")
    private String ema_usu;

    @Column(name = "cla_usu")
    private String cla_usu;

    @Column(name = "est_usu")
    private String est_usu;

    //contructores
    public Usuario() {
    }

    public Usuario(int cod_usu) {
        this.cod_usu = cod_usu;
    }

    public Usuario(String ali_usu, String ema_usu, String cla_usu, String est_usu) {
        this.ali_usu = ali_usu;
        this.ema_usu = ema_usu;
        this.cla_usu = cla_usu;
        this.est_usu = est_usu;
    }

    public Usuario(int cod_usu, String ali_usu, String ema_usu, String cla_usu, String est_usu) {
        this.cod_usu = cod_usu;
        this.ali_usu = ali_usu;
        this.ema_usu = ema_usu;
        this.cla_usu = cla_usu;
        this.est_usu = est_usu;
    }

    //metodos getters y setters
    public int getCod_usu() {
        return cod_usu;
    }

    public void setCod_usu(int cod_usu) {
        this.cod_usu = cod_usu;
    }

    public String getAli_usu() {
        return ali_usu;
    }

    public void setAli_usu(String ali_usu) {
        this.ali_usu = ali_usu;
    }

    public String getEma_usu() {
        return ema_usu;
    }

    public void setEma_usu(String ema_usu) {
        this.ema_usu = ema_usu;
    }

    public String getCla_usu() {
        return cla_usu;
    }

    public void setCla_usu(String cla_usu) {
        this.cla_usu = cla_usu;
    }

    public String getEst_usu() {
        return est_usu;
    }

    public void setEst_usu(String est_usu) {
        this.est_usu = est_usu;
    }
}
