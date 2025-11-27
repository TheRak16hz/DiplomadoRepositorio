package com.seguridad.seguridad;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TipoPrivacidadController {
     @GetMapping("/tipo_privacidad")

    public String ShowTipoPrivacidadView() {
        return "tipo_privacidad";
    }
}
