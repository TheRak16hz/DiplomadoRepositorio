package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TipoPrivacidadController {
     @GetMapping("/tipo_privacidad")

    public String ShowTipoPrivacidadView() {
        return "tipo_privacidad";
    }
}
