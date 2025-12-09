package com.seguridad.seguridad.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.seguridad.seguridad.models.Rol;
import com.seguridad.seguridad.models.Rol_Fan_Page;
import com.seguridad.seguridad.repository.RolRepositorio;

@Service
public class RolServicio {
    @Autowired
    private RolRepositorio rolRepositorio;
    /*
        * obtiene y devuelve una lista de todos los roles de la base de datos
        * @return una lista de objetos Rol
    */


    public List<Rol> listarRoles() {
        return rolRepositorio.findAll();
    }

    public List<Rol_Fan_Page> listar() {
        // si el metodo personalizado retorna List<Object>, realiza el cast/conversion
        List<Object> resultado = rolRepositorio.rol_fan_page_listar();
        List<Rol_Fan_Page> lista = new ArrayList<>();
        for (Object obj: resultado) {
            if (obj instanceof Rol_Fan_Page rolFanPage) {
                lista.add(rolFanPage);
            }
            // si el objeto es un array o map. deberas mapearlo manualmente a Rol_Fan_Page
        }
        return lista;
    }

}
