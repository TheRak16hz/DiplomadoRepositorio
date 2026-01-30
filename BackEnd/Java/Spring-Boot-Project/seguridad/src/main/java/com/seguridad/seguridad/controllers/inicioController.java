package com.seguridad.seguridad.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InicioController {
    @GetMapping("/index")
    //showSeguridadView() es un metodo de controlador cuyo objetivo es
    public String showIndexView(){
        return "index";
    }
    //ahora que sea un controller para seguridad
//y que responda a la ruta /seguridad
    @GetMapping("/seguridad")
    //showSeguridadView() es un metodo de controlador cuyo objetivo es
    public String showSeguridadView(){
        return "seguridad";
    }

}