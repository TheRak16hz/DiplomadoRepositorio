/*Indica que la clase Ususario,java pertenenece al paquete modelo */
package com.seguridad.seguridad.models;
//Permite utilizar la anotacion Column
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

//La anotación @Entity le dice a Java que la clase que está justo debajo es un modelo o una entida y cada objeto que crees de esta clase será una fila en esa tabla
@Entity
@Table(name = "rol_fan_page", schema = "seguridad")
public class Rol_Fan_Page {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_rol_fan")
    private Integer cod_rol_fan;

    @ManyToOne
    @JoinColumn(name = "fky_per", referencedColumnName = "cod_per")
    private persona persona;

    @ManyToOne
    @JoinColumn(name = "fky_fan_pag", referencedColumnName = "cod_fan_pag")
    private Fan_Page fan_page;
    

    @ManyToOne
    @JoinColumn(name = "fky_rol", referencedColumnName = "cod_rol")
    private Rol rol;
    
   
    @Column(name = "est_rol_fan")
    private String est_rol_fan;

    //Constructor Vacio
    public Rol_Fan_Page() { 
    }

    //Constructor Completo
    public Rol_Fan_Page(Integer cod_rol_fan, persona persona, Fan_Page fan_page, Rol rol, String est_rol_fan) {
        this.cod_rol_fan = cod_rol_fan;
        this.persona = persona;
        this.fan_page = fan_page;
        this.rol = rol;
        this.est_rol_fan = est_rol_fan;
    }       
    // Getters and Setters
    public Integer getCod_rol_fan() {   
        return cod_rol_fan;
    }   
    public void setCod_rol_fan(Integer cod_rol_fan) {
        this.cod_rol_fan = cod_rol_fan;
    }
    public persona getPersona() {
        return persona;
    }
    public void setPersona(persona persona) {
        this.persona = persona;
    }   
    public Fan_Page getFan_page() {
        return fan_page;
    }   
    public void setFan_page(Fan_Page fan_page) {
        this.fan_page = fan_page;
    }   
    public Rol getRol() {
        return rol;
    }
    public void setRol(Rol rol) {
        this.rol = rol;
    }   
    public String getEst_rol_fan() {
        return est_rol_fan;
    }
    public void setEst_rol_fan(String est_rol_fan) {
        this.est_rol_fan = est_rol_fan;
    }
}