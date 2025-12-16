package com.seguridad.seguridad.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.seguridad.seguridad.models.Rol;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Integer>{

    // Método para invocar el procedimiento almacenado (más seguro)
    @Query(value = "SELECT * FROM seguridad.rol_listar()", nativeQuery = true)
    List<Object> rol_listar();

    // Método personalizado para añadir un nuevo rol
    @Transactional
    @Query(value = "SELECT seguridad.rol_agregar(:nom_rol, :des_rol, :est_rol)", nativeQuery = true)
    Integer rol_agregar(@Param("nom_rol") String nom_rol, @Param("des_rol") String des_rol, @Param("est_rol") String est_rol);

}