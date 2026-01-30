package com.seguridad.seguridad.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

import java.util.List;

import com.seguridad.seguridad.models.Usuario;
import com.seguridad.seguridad.services.UsuarioServicio;

@Controller
public class UsuarioController {
    
    
    @Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping("/usuario")
    public String showUsuarioView() {
        return "usuario";
    }

    @GetMapping("/usuario_listar")
    public String Usuariolistar(Model modelo) {
        List<Usuario> usuarios = usuarioServicio.listarUsuarios();
        modelo.addAttribute("usuarios", usuarios);
        return "usuario_listar";
    }

    // Metodo para llamar a la vista de agregar
    @GetMapping("/usuario_agregar")
    public String agregarUsuario(Model modelo) {
        Usuario nuevoUsuario = new Usuario();
        nuevoUsuario.setAli_usu("");
        nuevoUsuario.setEma_usu("");
        nuevoUsuario.setCla_usu("");
        nuevoUsuario.setEst_usu("");
        modelo.addAttribute("usuario", nuevoUsuario);
        return "usuario_agregar";
    }

    @PostMapping("/usuario_agregar")
    public String agregarUsuario(@ModelAttribute("usuario") Usuario formUsuario,
            RedirectAttributes redirectAttrs) {
        try {
            formUsuario.setAli_usu(formUsuario.getAli_usu() != null ? formUsuario.getAli_usu().trim() : "");
            formUsuario.setEma_usu(formUsuario.getEma_usu() != null ? formUsuario.getEma_usu().trim() : "");
            formUsuario.setCla_usu(formUsuario.getCla_usu() != null ? formUsuario.getCla_usu().trim() : "");
            formUsuario.setEst_usu(formUsuario.getEst_usu() != null ? formUsuario.getEst_usu().toUpperCase() : "A");
            usuarioServicio.agregarUsuario(formUsuario);

            redirectAttrs.addFlashAttribute("exito", "Usuario creado correctamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Error al crear el usuario: " + e.getMessage());
        }
        return "redirect:/usuario_listar";
    }

    // Metodo para mostrar la vista de editar
    @GetMapping("/usuario_editar")
    public String editarUsuario(@RequestParam("cod_usu") int cod_usu, Model modelo) {
        Usuario usuario = usuarioServicio.buscarPorId(cod_usu);
        modelo.addAttribute("usuario", usuario);
        return "usuario_editar";
    }

    // Metodo para guardar los cambios editados
    @PostMapping("/usuario_editar")
    public String editarUsuario(@ModelAttribute("usuario") Usuario usuario,
            RedirectAttributes redirectAttrs) {
        try {
            usuarioServicio.modificarUsuario(usuario);
            redirectAttrs.addFlashAttribute("exito", "usuario modificado exitosamente");
        } catch (Exception e) {
            redirectAttrs.addFlashAttribute("error", "Ocurrio un error al editar el usuario");
        }
        return "redirect:/usuario_listar";
    }

    @GetMapping("/usuario_eliminar")
    public String eliminarUsuario(@RequestParam("cod_usu") int cod_usu, RedirectAttributes flash) {
        try {
            boolean eliminado = usuarioServicio.eliminarUsuario(cod_usu);
            if (eliminado) {
                flash.addFlashAttribute("exito", "usuario eliminado exitosamente");
            } else {
                flash.addFlashAttribute("error", "El usuario no existe o ya fue eliminado");
            }
        } catch (Exception e) {
            flash.addFlashAttribute("error", "No se pudo eliminar el usuario");
        }
        return "redirect:/usuario_listar";
    }
}