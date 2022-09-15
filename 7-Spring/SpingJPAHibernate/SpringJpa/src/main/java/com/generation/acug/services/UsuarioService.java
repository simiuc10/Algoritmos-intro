package com.generation.acug.services;

import org.springframework.stereotype.Service;

import com.generation.acug.models.UsuarioModel;
import com.generation.acug.repositories.UsuarioRepository;

import java.util.ArrayList;
import java.util.Optional;

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

	public Optional<UsuarioModel> obtenerPorId(Long id){
        return usuariorepository.findById(id);
    }

	public ArrayList<UsuarioModel>  obtenerPorPrioridad(Integer prioridad) {
        return usuariorepository.findByPrioridad(prioridad);
    }

	public boolean eliminarUsuario(Long id) {
        try{
            usuariorepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


}
