package com.seguridad.seguridad.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import com.seguridad.seguridad.models.Rol_Fan_Page;
import com.seguridad.seguridad.repositories.RolFanPageRepositorio;

public class RolFanPageServicio {
    @Autowired
    private RolFanPageRepositorio rolFanPageRepositorio;

    /**
     * Obtiene y devuelve una lista de todos los roles fan page de la base de datos.
     * @return Una lista de objetos Rol_Fan_Page.
     */
    public List<Rol_Fan_Page> listarRolFanPage() {
        return rolFanPageRepositorio.rol_fan_page_listar();
    }
}