package com.seguridad.seguridad.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.seguridad.seguridad.models.Usuario;
import com.seguridad.seguridad.repository.UsuarioRepositorio;
import org.springframework.stereotype.Service;

@Service  
public class UsuarioServicio {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> listarUsuarios() {
        return usuarioRepositorio.findAll();
    }
    
}