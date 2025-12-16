package com.seguridad.seguridad.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.seguridad.seguridad.models.Rol_Fan_Page;
import com.seguridad.seguridad.repository.RolFanPageRepositorio;


public class RolFanPageServicio {
    @Autowired
    private RolFanPageRepositorio rolFanPageRepositorio;
    /**
     * Obtiene y devuelve una lista de todos los roles fan page de la base de datos.
     * @return Una lista de objetos Rol_Fan_Page.
     */
    public List<Rol_Fan_Page> listar() {
        // Si el metodo personalizado retorna List<Object>, realiza el cast/conversion aqui
        List<Object> resultado = rolFanPageRepositorio.rol_fan_page_listar();
        List<Rol_Fan_Page> lista = new ArrayList<>();
        for (Object obj : resultado) {
            if (obj instanceof Rol_Fan_Page rolFanPage)
                lista.add(rolFanPage);
        }
        // Si el objeto es un array o map, deberas mapearlo manualmente a Rol_Fan_Page
        return lista;
    }

}
