package com.seguridad.seguridad.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.Rol;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Integer>{
 //Metodo para invocar el procedimiento almacenado (mas seguro):
 @Query(value = "SELECT * FROM seguridad.rol_listar()", nativeQuery = true)
 List<Rol> rol_listar();

 //Metodo para invocae wl procedimiento almacenado (mas seguro)
 //falto aqui

 @Transactional
 @Query(value="SELECT seguridad.rol_agregar(:nom_rol, :des_rol, :est_rol)", nativeQuery = true)
 Integer rol_agregar(@Param("nom_rol") String nom_rol, @Param("des_rol") String des_rol, @Param("est_rol") String est_rol);

 //para modificar si la funcion retorna un integer, tambien NO USAR @modifying
 @Transactional
 @Query(value ="SELECT seguridad.rol_modificar(:cod_rol, :nom_rol, :des_rol, :est_rol)", nativeQuery = true)
 Integer rol_modificar(@Param("cod_rol")int cod_rol, @Param("nom_rol") String nom_rol, @Param ("des_rol") String des_rol, @Param("est_rol") String est_rol);

 //Metodo para eliminar un rol
 @Transactional
 @Query(value = "SELECT seguridad.rol_eliminar(:cod_rol)", nativeQuery = true)
 Integer rol_eliminar(@Param("cod_rol") int cod_rol);

 //Nuevi: buscar un rol por su codigo usando el procedimiento/funcion seguridad.rol_buscar
 @Query(value = "SELECT * FROM seguridad.rol_buscar(:cod_rol)", nativeQuery = true)
 Rol rol_buscar(@Param("cod_rol") int cod_rol);
}
