package com.seguridad.seguridad.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.seguridad.seguridad.models.Tipo_Privacidad;
import com.seguridad.seguridad.repository.TipoPrivacidadRepositorio;

@Service
public class TipoPrivacidadServicio {
    //Inyecta el repositorio para tener acceso a los metodos de la base de datos
    @Autowired
    private TipoPrivacidadRepositorio tipoPrivacidadRepositorio;

    /**
     * Obtiene u devuelve una lista de todos los roles de la base de datos.
     * @return Una lista de objetos Rol.
     */
    public List<Tipo_Privacidad> listarTipos() {
        return tipoPrivacidadRepositorio.findAll();
    }

}