package com.seguridad.seguridad;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RolController {
    @GetMapping("/rol")

    public String ShowRolView() {
        return "rol";
    }
}
