import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from '../shared/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  salvaUsuario() {
    this.usuarioService.insereUsuario(this.usuario).subscribe((resposta: any) => {
      alert('Usuário salvo com sucesso!');
      this.retornaTela();
    });
  }

  isNomeUsuarioVazio(nome: string) {
    if(nome && nome.length > 0) {
      return false;
    }
    return true;
  }

  retornaTela() {
    this.router.navigate(['users']);
  }

}
