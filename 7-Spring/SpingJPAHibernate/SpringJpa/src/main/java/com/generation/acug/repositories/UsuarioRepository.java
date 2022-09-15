package com.generation.acug.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.acug.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long>{
	
	public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);

	}




