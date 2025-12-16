package com.seguridad.seguridad.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seguridad.seguridad.models.Rol_Fan_Page;

public interface RolFanPageRepositorio extends JpaRepository<Rol_Fan_Page, Integer> {
    // Metodo para invocar el procedimiento almacenado (mas seguro):
    @Query(value = "SELECT * FROM seguridad.rol_fan_page_listar()", nativeQuery = true)
    List<Object> rol_fan_page_listar();
    /**
     * Metodo usando nuestro propio procedimiento de almacenado.
     * Llama a la funcion SQL 'seguridad.rol_fan_page_agregar' en el esquema 'seguridad'.
     * @param fky_per    ID de la persona (clave foranea)
     * @param fky_fan_pag  ID de la fan page (clave foranea)
     * @param fky_rol   ID del rol (clave foranea)
     * @param est_rol_fan  Estado del rol en la fan page (A/I)
     * @return  El Resultado del procedimiento (generalmente el ID generado o codigo de exito)
     * Uso: Se invoca desde el controlador al guardar un nuevo registro, pasando los IDs y el estatus.
     */

    @org.springframework.transaction.annotation.Transactional
    @org.springframework.data.jpa.repository.Query(value = "SELECT seguridad.rol_fan_page_agregar(:fky_per, :fky_fan_pag, :fky_rol, :est_rol_fan)", nativeQuery = true)
    Integer rol_fan_page_agregar(
            @org.springframework.data.repository.query.Param("fky_per") int fky_per,
            @org.springframework.data.repository.query.Param("fky_fan_pag") int fky_fan_pag,
            @org.springframework.data.repository.query.Param("fky_rol") int fky_rol,
            @org.springframework.data.repository.query.Param("est_rol_fan") String est_rol_fan
    );
}