package com.seguridad.seguridad.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.seguridad.seguridad.models.Rol;
import com.seguridad.seguridad.service.RolServicio;

@Controller
public class RolController {
    @GetMapping("/rol")

    public String ShowRolView() {
        return "rol";
    }

    @Autowired
    private RolServicio rolServicio;

    @GetMapping("/rol_listar")
    public String RolListar(Model modelo) {
        List<Rol> rols = rolServicio.listarRoles();
        modelo.addAttribute("rols", rols);
        return "rol_listar";
    }

}
