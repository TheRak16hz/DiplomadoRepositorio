package com.seguridad.seguridad.controllers;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.seguridad.seguridad.models.Rol_Fan_Page;
import com.seguridad.seguridad.repositories.FanPageRepositorio;
import com.seguridad.seguridad.repositories.PersonaRepositorio;
import com.seguridad.seguridad.repositories.RolFanPageRepositorio;
import com.seguridad.seguridad.repositories.RolRepositorio;

@Controller
public class RolFanPageController {

    @Autowired
    private RolFanPageRepositorio rolFanPageRepositorio;

    @Autowired
    private PersonaRepositorio personaRepositorio;

    @Autowired
    private FanPageRepositorio fanPageRepositorio;

    @Autowired
    private RolRepositorio rolRepositorio;

    @GetMapping("/rol_fan_page")
    public String showRolFanPageView() {
        return "rol_fan_page";
    }

    @GetMapping("/rol_fan_page_listar")
    public String RolFanPageListar(Model modelo) {
        List<Rol_Fan_Page> rolfanpages = rolFanPageRepositorio.findAll();
        modelo.addAttribute("rolfanpages", rolfanpages);
        return "rol_fan_page_listar";
    }

    @GetMapping("/rol_fan_page_agregar")
    public String agregarRolFanPage(Model modelo) {
        Rol_Fan_Page nuevoRolFanPage = new Rol_Fan_Page();
        modelo.addAttribute("rolFanPage", nuevoRolFanPage);
        modelo.addAttribute("personas", personaRepositorio.findAll());
        modelo.addAttribute("fanPages", fanPageRepositorio.findAll());
        modelo.addAttribute("roles", rolRepositorio.findAll());
        return "rol_fan_page_agregar";
    }

    @PostMapping("/rol_fan_page_agregar")
    public String agregarRolFanPage(@ModelAttribute("rolFanPage") Rol_Fan_Page formRolFanPage,
            RedirectAttributes redirectAttrs) {
        try {
            Objects.requireNonNull(formRolFanPage, "formRolFanPage must not be null");
            rolFanPageRepositorio.save(formRolFanPage);
            redirectAttrs.addFlashAttribute("exito", "Rol Fan Page creado correctamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Error al crear el Rol Fan Page: " + e.getMessage());
        }
        return "redirect:/rol_fan_page_listar";
    }

    @GetMapping("/rol_fan_page_editar")
    public String editarRolFanPage(@RequestParam("cod_rol_fan") int cod_rol_fan, Model modelo) {
        Rol_Fan_Page rolFanPage = rolFanPageRepositorio.findById(cod_rol_fan).orElse(null);
        modelo.addAttribute("rolFanPage", rolFanPage);
        modelo.addAttribute("personas", personaRepositorio.findAll());
        modelo.addAttribute("fanPages", fanPageRepositorio.findAll());
        modelo.addAttribute("roles", rolRepositorio.findAll());
        return "rol_fan_page_editar";
    }

    @PostMapping("/rol_fan_page_editar")
    public String editarRolFanPage(@ModelAttribute("rolFanPage") Rol_Fan_Page rolFanPage,
            RedirectAttributes redirectAttrs) {
        try {
            Objects.requireNonNull(rolFanPage, "rolFanPage must not be null");
            rolFanPageRepositorio.save(rolFanPage);
            redirectAttrs.addFlashAttribute("exito", "Rol Fan Page modificado exitosamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Ocurrió un error al editar el Rol Fan Page");
        }
        return "redirect:/rol_fan_page_listar";
    }

    @GetMapping("/rol_fan_page_eliminar")
    public String eliminarRolFanPage(@RequestParam("cod_rol_fan") int cod_rol_fan, RedirectAttributes flash) {
        try {
            rolFanPageRepositorio.deleteById(cod_rol_fan);
            flash.addFlashAttribute("exito", "Rol Fan Page eliminado exitosamente");
        } catch (Exception e) {
            flash.addFlashAttribute("error", "No se pudo eliminar el Rol Fan Page");
        }
        return "redirect:/rol_fan_page_listar";
    }
}