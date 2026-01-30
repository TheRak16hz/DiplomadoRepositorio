package com.seguridad.seguridad.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seguridad.seguridad.models.Fan_Page;

@Repository
public interface FanPageRepositorio extends JpaRepository<Fan_Page, Integer>{


}
