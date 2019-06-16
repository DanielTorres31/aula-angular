import { UsuarioService } from './shared/usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [UsuarioComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
