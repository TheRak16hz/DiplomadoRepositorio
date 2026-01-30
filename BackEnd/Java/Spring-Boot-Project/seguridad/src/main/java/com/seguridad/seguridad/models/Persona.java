package com.seguridad.seguridad.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "persona", schema = "perfil_personal")
public class persona {
    @Id
    @Column(name = "cod_per")   
    private int cod_per;

    @Column(name = "nm1_per")
    private String nm1_per;

    @Column(name = "nm2_per")
    private String nm2_per;

    @Column(name = "ap1_per")
    private String ap1_per;

    @Column(name = "ap2_per")
    private String ap2_per;

    //constructores


    public persona() {
    }

    public persona(int cod_per, String nm1_per, String nm2_per, String ap1_per, String ap2_per) {
        this.cod_per = cod_per;
        this.nm1_per = nm1_per;
        this.nm2_per = nm2_per;
        this.ap1_per = ap1_per;
        this.ap2_per = ap2_per;
    }


    public persona(String nm1_per, String nm2_per, String ap1_per, String ap2_per) {
        this.nm1_per = nm1_per;
        this.nm2_per = nm2_per;
        this.ap1_per = ap1_per;
        this.ap2_per = ap2_per;
    }

    public persona(int cod_per) {
        this.cod_per = cod_per;
    }

    // Getters and Setters
    public int getCod_per() {
        return cod_per;
    }

    public void setCod_per(int cod_per) {
        this.cod_per = cod_per;
    }

    public String getNm1_per() {
        return nm1_per;
    }

    public void setNm1_per(String nm1_per) {
        this.nm1_per = nm1_per;
    }

    public String getNm2_per() {
        return nm2_per;
    }

    public void setNm2_per(String nm2_per) {
        this.nm2_per = nm2_per;
    }

    public String getAp1_per() {
        return ap1_per;
    }

    public void setAp1_per(String ap1_per) {
        this.ap1_per = ap1_per;
    }

    public String getAp2_per() {
        return ap2_per;
    }

    public void setAp2_per(String ap2_per) {
        this.ap2_per = ap2_per;
    }

}