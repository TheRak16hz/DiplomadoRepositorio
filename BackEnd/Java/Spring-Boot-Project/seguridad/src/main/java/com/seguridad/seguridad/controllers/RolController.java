package com.seguridad.seguridad.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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

@GetMapping("/rol_agregar")
    public String agregarRol(Model modelo) {
        Rol nuevoRol = new Rol();
        // nuevoRol.setNom_rol(nom_rol: "");
        // nuevoRol.setDes_rol(des_rol: "");
        // nuevoRol.setEst_rol(est_rol: "");
        modelo.addAttribute("rol", nuevoRol);
        return "rol_agregar";
    }

    //METODO para guardar los datos introducidos en el formulario
    @PostMapping("/rol_agregar")
    public String agregarRol(@ModelAttribute("rol")Rol formRol, RedirectAttributes redirect) {
        try {
            Rol rol = new Rol();
            rol.setNom_rol(formRol.getNom_rol() != null ? formRol.getNom_rol().trim() : "");
            rol.setDes_rol(formRol.getDes_rol() != null ? formRol.getDes_rol().trim() : "");
            rol.setEst_rol(formRol.getEst_rol() != null ? formRol.getEst_rol().trim() : "");
            rolServicio.agregarRol(rol);
            redirect.addFlashAttribute("mensaje", "Rol guardado exitosamente.");
            return "redirect:/rol_listar";
        } catch (Exception e) {
            redirect.addFlashAttribute("Error", "Error al guardar el rol: ");
            return "redirect:/rol_listar";
        }
    }
}
