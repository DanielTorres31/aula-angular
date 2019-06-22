import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    private urlServico: string = 'http://localhost:3001/users/';

    public constructor(private httpClient: HttpClient) {}

    public insereUsuario(usuario: Usuario) {
        return this.httpClient.post(this.urlServico, usuario);
    }

    public buscaUsuarios() {
        return this.httpClient.get(this.urlServico);
    }
}