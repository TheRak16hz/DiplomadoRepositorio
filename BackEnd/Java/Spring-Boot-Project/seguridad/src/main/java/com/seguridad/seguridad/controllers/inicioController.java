package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class inicioController {
    
    @GetMapping("/")

    public String showIndexView() {
        return "index";
    }

    @GetMapping("/seguridad")

    public String ShowSeguridadView() {
        return "seguridad";
    }


}
