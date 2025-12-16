package com.seguridad.seguridad.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.Persona;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Integer> {

}
