package com.seguridad.seguridad;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RolFanPageController {
     @GetMapping("/rol_fan_page")

    public String ShowRolFanPageView() {
        return "rol_fan_page";
    }
}
