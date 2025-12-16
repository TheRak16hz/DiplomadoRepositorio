package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import com.seguridad.seguridad.models.Usuario;
import java.util.List;
import com.seguridad.seguridad.service.UsuarioServicio;

@Controller
public class UsuarioController {
    
    @GetMapping("/usuario")
    public String showUsuarioView(){
        return "usuario";
    }

    @Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping("/usuario_listar")
    public String UsuarioListar(Model modelo) {
        List<Usuario> usuarios = usuarioServicio.listarUsuarios();
        modelo.addAttribute("usuarios", usuarios);
        return "usuario_listar";
    }
}