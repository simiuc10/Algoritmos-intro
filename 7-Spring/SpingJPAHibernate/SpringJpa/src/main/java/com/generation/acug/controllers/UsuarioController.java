package com.generation.acug.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.acug.models.UsuarioModel;
import com.generation.acug.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	@Autowired
	UsuarioService usuarioservice;
	@GetMapping()
	public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioservice.obtenerusuarios();
    }

	@PostMapping ()
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioservice.guardarUsuario(usuario);
    }

	
}
