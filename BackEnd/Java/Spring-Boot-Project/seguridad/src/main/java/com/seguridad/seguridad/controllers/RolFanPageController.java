package com.seguridad.seguridad.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.seguridad.seguridad.models.Rol_Fan_Page;
import com.seguridad.seguridad.repository.RolFanPageRepositorio;

@Controller
public class RolFanPageController {
    @GetMapping("/rol_fan_page")

    public String ShowRolFanPageView() {
        return "rol_fan_page";
    }

    @Autowired
    private RolFanPageRepositorio rolFanPageRepositorio;

    @GetMapping("/rol_fan_page_listar")
    public String RolFanPageListar(Model modelo) {
        //consulta JPA
        System.out.println("Entro al controlador");
        List<Rol_Fan_Page> rolsfanpages = rolFanPageRepositorio.findAll();
        modelo.addAttribute("rolsfanpages", rolsfanpages);
        return "rol_fan_page_listar";
    }
}
