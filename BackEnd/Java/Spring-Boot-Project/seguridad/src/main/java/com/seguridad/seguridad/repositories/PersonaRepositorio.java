package com.seguridad.seguridad.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.persona;

@Repository
public interface PersonaRepositorio extends JpaRepository<persona, Integer> {
    
}
