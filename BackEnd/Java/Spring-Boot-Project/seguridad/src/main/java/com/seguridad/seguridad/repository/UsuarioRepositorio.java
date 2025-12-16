package com.seguridad.seguridad.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.seguridad.seguridad.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{
 // Metodo para invocar el procedimiento almacenado (si existe en tu BD como usuario_listar):
 @Query(value = "SELECT * FROM seguridad.usuario_listar()", nativeQuery = true)
 List<Object> usuario_listar();
}