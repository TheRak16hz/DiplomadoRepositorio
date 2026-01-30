package com.seguridad.seguridad.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import com.seguridad.seguridad.models.TipoPrivacidad;
import com.seguridad.seguridad.repositories.TipoPrivacidadRepositorio;

import org.springframework.stereotype.Service;

@Service
public class TipoPrivacidadServicio {

    @Autowired
    private TipoPrivacidadRepositorio tipoPrivacidadRepositorio;

    public List<TipoPrivacidad> listarTipoPrivacidad() {
        return tipoPrivacidadRepositorio.tipo_privacidad_listar();
    }

    // metodo para agregar
    public void agregarTipoPrivacidad(TipoPrivacidad tipo) {
        tipoPrivacidadRepositorio.tipo_privacidad_agregar(
                tipo.getNom_tip(),
                tipo.getEst_tip());
    }

    // metodo para modificar
    public void modificarTipoPrivacidad(TipoPrivacidad tipo) {
        tipoPrivacidadRepositorio.tipo_privacidad_modificar(
                tipo.getCod_tip(),
                tipo.getNom_tip(),
                tipo.getEst_tip());
    }

    // Metodo para buscar por id
    public TipoPrivacidad buscarPorId(int cod_tip) {
        return tipoPrivacidadRepositorio.tipo_privacidad_buscar(cod_tip);
    }

    // Metodo para eliminar
    public boolean eliminarTipoPrivacidad(int cod_tip) {
        TipoPrivacidad tipo = tipoPrivacidadRepositorio.findById(cod_tip).orElse(null);
        if (tipo != null) {
            tipoPrivacidadRepositorio.tipo_privacidad_eliminar(cod_tip);
            return true;
        }
        return false;
    }
}