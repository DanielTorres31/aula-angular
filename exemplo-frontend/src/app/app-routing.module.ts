import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NovoUsuarioComponent } from './components/usuario/novo-usuario/novo-usuario.component';

const routes: Routes = [
  {path: 'users', component: UsuarioComponent},
  {path: 'users/new', component: NovoUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
