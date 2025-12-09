package com.seguridad.seguridad.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.Rol;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Integer> {
    //metodo para invocar el procedimiento almacenado (mas seguro):
    @Query(value = "SELECT * FROM seguridad.rol_listar()", nativeQuery = true)
    List<Rol> rol_listar();

    //metodo estandar de Spring Data JPA
    //List<Rol_Fan_Page> findAll();

    // Metodo para invocar el procedimiento almacenado (mas seguro):
    @Query(value = "SELECT * FROM seguridad.rol_fan_page_listar()", nativeQuery = true)
    List<Object> rol_fan_page_listar();
}
