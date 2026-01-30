package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

import java.util.List;

import com.seguridad.seguridad.models.TipoPrivacidad;
import com.seguridad.seguridad.services.TipoPrivacidadServicio;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TipoPrivacidadController {

    @Autowired
    private TipoPrivacidadServicio tipoPrivacidadServicio;

    @GetMapping("/tipo_privacidad")
    public String showTipoPrivacidadView() {
        return "tipo_privacidad";
    }

    @GetMapping("/tipo_privacidad_listar")
    public String TipoPrivacidadListar(Model modelo) {
        List<TipoPrivacidad> listaTipos = tipoPrivacidadServicio.listarTipoPrivacidad();
        modelo.addAttribute("tiposPrivacidad", listaTipos);
        return "tipo_privacidad_listar";
    }

    // Metodo para llamar a la vista de agregar
    @GetMapping("/tipo_privacidad_agregar")
    public String agregarTipoPrivacidad(Model modelo) {
        TipoPrivacidad nuevoTipo = new TipoPrivacidad();
        nuevoTipo.setNom_tip("");
        nuevoTipo.setEst_tip("");
        modelo.addAttribute("tipoPrivacidad", nuevoTipo);
        return "tipo_privacidad_agregar";
    }

    @PostMapping("/tipo_privacidad_agregar")
    public String agregarTipoPrivacidad(@ModelAttribute("tipoPrivacidad") TipoPrivacidad formTipo,
            RedirectAttributes redirectAttrs) {
        try {
            formTipo.setNom_tip(formTipo.getNom_tip() != null ? formTipo.getNom_tip().trim() : "");
            formTipo.setEst_tip(formTipo.getEst_tip() != null ? formTipo.getEst_tip().toUpperCase() : "A");
            tipoPrivacidadServicio.agregarTipoPrivacidad(formTipo);

            redirectAttrs.addFlashAttribute("exito", "Tipo de privacidad creado correctamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Error al crear el tipo de privacidad: " + e.getMessage());
        }
        return "redirect:/tipo_privacidad_listar";
    }

    // Metodo para mostrar la vista de editar
    @GetMapping("/tipo_privacidad_editar")
    public String editarTipoPrivacidad(@RequestParam("cod_tip") int cod_tip, Model modelo) {
        TipoPrivacidad tipo = tipoPrivacidadServicio.buscarPorId(cod_tip);
        modelo.addAttribute("tipoPrivacidad", tipo);
        return "tipo_privacidad_editar";
    }

    // Metodo para guardar los cambios editados
    @PostMapping("/tipo_privacidad_editar")
    public String editarTipoPrivacidad(@ModelAttribute("tipoPrivacidad") TipoPrivacidad tipo,
            RedirectAttributes redirectAttrs) {
        try {
            tipoPrivacidadServicio.modificarTipoPrivacidad(tipo);
            redirectAttrs.addFlashAttribute("exito", "Tipo de privacidad modificado exitosamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Ocurrio un error al editar el tipo de privacidad");
        }
        return "redirect:/tipo_privacidad_listar";
    }

    @GetMapping("/tipo_privacidad_eliminar")
    public String eliminarTipoPrivacidad(@RequestParam("cod_tip") int cod_tip, RedirectAttributes flash) {
        try {
            boolean eliminado = tipoPrivacidadServicio.eliminarTipoPrivacidad(cod_tip);
            if (eliminado) {
                flash.addFlashAttribute("exito", "Tipo de privacidad eliminado exitosamente");
            } else {
                flash.addFlashAttribute("error", "El tipo de privacidad no existe o ya fue eliminado");
            }
        } catch (Exception e) {
            flash.addFlashAttribute("error", "No se pudo eliminar el tipo de privacidad");
        }
        return "redirect:/tipo_privacidad_listar";
    }
}