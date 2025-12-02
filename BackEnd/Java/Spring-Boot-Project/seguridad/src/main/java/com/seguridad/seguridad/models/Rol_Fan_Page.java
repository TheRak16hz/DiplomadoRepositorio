package com.seguridad.seguridad.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity

@Table(name = "rol_fan_page", schema = "seguridad")
public class Rol_Fan_Page {

    @Id
    @Column (name = "cod_rol_fan")
    private int cod_rol_fan;

    //WIP averiguar como hacer en caso de tener que importar llaves foraneas

    

    @Column (name = "est_rol_fan")
    private String est_rol_fan;

}
