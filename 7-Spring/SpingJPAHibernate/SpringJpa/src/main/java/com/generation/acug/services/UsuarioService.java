package com.generation.acug.services;

import org.springframework.stereotype.Service;

import com.generation.acug.models.UsuarioModel;
import com.generation.acug.repositories.UsuarioRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList <UsuarioModel> obtenerusuarios(){
		return (ArrayList<UsuarioModel>) usuariorepository.findAll ();
	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuariorepository.save(usuario);
    }

	

}