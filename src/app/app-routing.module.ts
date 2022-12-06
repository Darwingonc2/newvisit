import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import {IniciarComponent} from './components/pages/iniciar/iniciar.component';
import {PerfilComponent} from './components/pages/perfil/perfil.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
    {path: '', component: RegistrarComponent},
    {path: 'iniciar-sesion', component: IniciarComponent},
    {path: 'perfil', component: PerfilComponent, ...canActivate(() => redirectUnauthorizedTo(['/'])) },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
