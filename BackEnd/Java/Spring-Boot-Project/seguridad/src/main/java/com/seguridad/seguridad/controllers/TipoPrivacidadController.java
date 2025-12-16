package com.seguridad.seguridad.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.seguridad.seguridad.models.Tipo_Privacidad;
import com.seguridad.seguridad.service.TipoPrivacidadServicio;

@Controller
public class TipoPrivacidadController {

    @GetMapping("/tipo_privacidad")

    public String showTipoPrivacidadView() {
        return "tipo_privacidad";
    }
    @Autowired
    private TipoPrivacidadServicio tipoPrivacidadServicio;

    @GetMapping("tipo_privacidad_listar")
    public String TipoPrivacidadListar(Model modelo) {
        List<Tipo_Privacidad> tipos = tipoPrivacidadServicio.listarTipos();
        modelo.addAttribute("tipos", tipos);
        return "tipo_privacidad_listar";
    }
}
