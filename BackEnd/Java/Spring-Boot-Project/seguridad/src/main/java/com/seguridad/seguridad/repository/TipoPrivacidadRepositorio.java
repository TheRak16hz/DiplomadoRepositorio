package com.seguridad.seguridad.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.Tipo_Privacidad;

import java.util.List;

@Repository
public interface TipoPrivacidadRepositorio extends JpaRepository<Tipo_Privacidad, Integer>{
    // Método para invocar el procedimiento almacenado (más seguro):
    @Query(value = "SELECT * FROM seguridad.tipo_privacidad_listar()", nativeQuery = true)
    List<Object> tipo_privacidad_listar();

    //Metodo estandar de Spring Data JPA:
    //List<Rol> findAll();

}
