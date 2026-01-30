
package com.seguridad.seguridad.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "fan_page", schema = "perfil_empresarial")

public class Fan_Page {
    @Id
    @Column(name = "cod_fan_pag")  
    private int cod_fan_pag;

    @Column(name = "nom_fan_pag")  
    String nom_fan_pag;

    @Column(name = "des_fan_pag")  
    String des_fan_pag;

    @Column(name = "per_fan_pag")  
    String per_fan_pag;

    @Column(name = "fec_fan_pag")  
    Date fec_fan_pag;

    @Column(name = "est_fan_pag")  
    String est_fan_pag;

    //constructores

    public Fan_Page() {
    }

    public Fan_Page(int cod_fan_pag, String nom_fan_pag, String des_fan_pag, String per_fan_pag, Date fec_fan_pag,
         String est_fan_pag) {
      this.cod_fan_pag = cod_fan_pag;
      this.nom_fan_pag = nom_fan_pag;
      this.des_fan_pag = des_fan_pag;
      this.per_fan_pag = per_fan_pag;
      this.fec_fan_pag = fec_fan_pag;
      this.est_fan_pag = est_fan_pag;
    }

    public Fan_Page(String nom_fan_pag, String des_fan_pag, String per_fan_pag, Date fec_fan_pag, String est_fan_pag) {
      this.nom_fan_pag = nom_fan_pag;
      this.des_fan_pag = des_fan_pag;
      this.per_fan_pag = per_fan_pag;
      this.fec_fan_pag = fec_fan_pag;
      this.est_fan_pag = est_fan_pag;
    }

    public Fan_Page(int cod_fan_pag) {
      this.cod_fan_pag = cod_fan_pag;
    }

    public int getCod_fan_pag() {
       return cod_fan_pag;
    }

    public void setCod_fan_pag(int cod_fan_pag) {
       this.cod_fan_pag = cod_fan_pag;
    }

    public String getNom_fan_pag() {
       return nom_fan_pag;
    }

    public void setNom_fan_pag(String nom_fan_pag) {
       this.nom_fan_pag = nom_fan_pag;
    }

    public String getDes_fan_pag() {
       return des_fan_pag;
    }

    public void setDes_fan_pag(String des_fan_pag) {
       this.des_fan_pag = des_fan_pag;
    }

    public String getPer_fan_pag() {
       return per_fan_pag;
    }

    public void setPer_fan_pag(String per_fan_pag) {
       this.per_fan_pag = per_fan_pag;
    }

    public Date getFec_fan_pag() {
       return fec_fan_pag;
    }

    public void setFec_fan_pag(Date fec_fan_pag) {
       this.fec_fan_pag = fec_fan_pag;
    }

    public String getEst_fan_pag() {
       return est_fan_pag;
    }

    public void setEst_fan_pag(String est_fan_pag) {
       this.est_fan_pag = est_fan_pag;
    }
  
   //constructores
   

}