package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class UsuarioController {
    @GetMapping("/usuario")
    //showUsuarioView() es un metodo de controlador cuyo objetivo es manejar las peticiones HTTP GET que llegan a la ruta /usuario y devolver el nombre de la vista que debe ser renderizada

    public String showUsuarioView() {
        return "usuario";
    }
}
