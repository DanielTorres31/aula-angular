import { UsuarioService } from './shared/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './shared/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = new Array<Usuario>();

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.buscaUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    })
  }

  novoUsuario() {
    this.router.navigate(['users/new']);
  }

}
