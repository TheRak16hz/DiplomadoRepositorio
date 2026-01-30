package com.seguridad.seguridad.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.TipoPrivacidad;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface TipoPrivacidadRepositorio extends JpaRepository<TipoPrivacidad, Integer> {
    // Metodo para invocar el procedimiento almacenado:
    @Query(value = "SELECT * FROM seguridad.tipo_privacidad_listar()", nativeQuery = true)
    List<TipoPrivacidad> tipo_privacidad_listar();

    @Transactional
    @Query(value = "SELECT seguridad.tipo_privacidad_agregar(:nom_tip, :est_tip)", nativeQuery = true)
    Integer tipo_privacidad_agregar(@Param("nom_tip") String nom_tip, @Param("est_tip") String est_tip);

    @Transactional
    @Query(value = "SELECT seguridad.tipo_privacidad_modificar(:cod_tip, :nom_tip, :est_tip)", nativeQuery = true)
    Integer tipo_privacidad_modificar(@Param("cod_tip") int cod_tip, @Param("nom_tip") String nom_tip,
            @Param("est_tip") String est_tip);

    // Metodo para eliminar
    @Transactional
    @Query(value = "SELECT seguridad.tipo_privacidad_eliminar(:cod_tip)", nativeQuery = true)
    Integer tipo_privacidad_eliminar(@Param("cod_tip") int cod_tip);

    // Buscar por id
    @Query(value = "SELECT * FROM seguridad.tipo_privacidad_buscar(:cod_tip)", nativeQuery = true)
    TipoPrivacidad tipo_privacidad_buscar(@Param("cod_tip") int cod_tip);
}