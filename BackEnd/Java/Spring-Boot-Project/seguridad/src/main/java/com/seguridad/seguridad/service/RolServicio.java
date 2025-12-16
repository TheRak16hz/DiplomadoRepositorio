package com.seguridad.seguridad.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seguridad.seguridad.models.Rol;
import com.seguridad.seguridad.repository.RolRepositorio;

@Service
public class RolServicio {
    
    // Inyecta el repositorio
    @Autowired
    private RolRepositorio rolRepositorio;

    public List<Rol> listarRoles() {
        List<Object> resultados = rolRepositorio.rol_listar();
        
        return resultados.stream()
            .map(item -> {
                if (item instanceof Object[] objetos) {
                    Rol rol = new Rol();
                    
                    // --- Mapeo CORREGIDO (Verifica este orden con tu función SQL) ---
                    // El orden de los índices DEBE COINCIDIR con el orden de las columnas que devuelve tu función 'seguridad.rol_listar()'

                    // Se asume el orden más común para la tabla Rol: (cod_rol, nom_rol, des_rol, est_rol)

                    if (objetos.length > 0) {
                        // 1. Índice 0: Asignado al CÓDIGO (PK)
                        // NOTA: Es común que el ID sea Integer en Java, por eso se hace un casting explícito o conversíon segura.
                        rol.setCod_rol(Integer.valueOf(String.valueOf(objetos[0]))); 
                    }
                    if (objetos.length > 1) {
                        // 2. Índice 1: Asignado al NOMBRE
                        rol.setNom_rol(String.valueOf(objetos[1])); 
                    }
                    if (objetos.length > 2) {
                        // 3. Índice 2: Asignado a la DESCRIPCIÓN
                        rol.setDes_rol(String.valueOf(objetos[2])); 
                    }
                    if (objetos.length > 3) {
                        // 4. Índice 3: Asignado al ESTATUS
                        rol.setEst_rol(String.valueOf(objetos[3])); 
                    }
                    // -----------------------------------------------------------------
                    
                    return rol;
                }
                return null;
            })
            .filter(rol -> rol != null)
            .collect(Collectors.toList());
    }

    public void agregarRol(Rol rol) {
        rolRepositorio.rol_agregar(
            rol.getNom_rol(),
            rol.getDes_rol(),
            rol.getEst_rol()
        );
    }
}