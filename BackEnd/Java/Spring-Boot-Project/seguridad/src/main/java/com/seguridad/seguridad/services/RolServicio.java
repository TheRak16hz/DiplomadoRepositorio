package com.seguridad.seguridad.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import com.seguridad.seguridad.models.Rol;
import com.seguridad.seguridad.repositories.RolRepositorio;

import org.springframework.stereotype.Service;

@Service  
public class RolServicio {

    @Autowired
    private RolRepositorio rolRepositorio;

    public List<Rol> listarRoles() {
        return rolRepositorio.rol_listar();
    }

    //metodo para agregar un rol
    public void agregarRol(Rol rol){
        //Usando getters para obtener los valores
        rolRepositorio.rol_agregar(
            rol.getNom_rol(),
            rol.getDes_rol(),
            rol.getEst_rol()
        );
    }

    //metodo para modificar un rol
    public void  modificarRol(Rol rol){
        //Usando getters para obtener los valores
        rolRepositorio.rol_modificar(
            rol.getCod_rol(),
            rol.getNom_rol(),
            rol.getDes_rol(),
            rol.getEst_rol()
        );
    }

    //Metodo para buscar un rol por su id
    public Rol buscarPorId(int cod_rol){
        //Obtener el rol desde el repositorio
        return rolRepositorio.rol_buscar(cod_rol);
    }

    //Metodo para eliminar un rol
    public boolean eliminarRol(int cod_rol){
        Rol rol = rolRepositorio.findById(cod_rol).orElse(null);
        if(rol !=null){
            rolRepositorio.rol_eliminar(cod_rol);
            return true;
        }
    return false;
    }
}