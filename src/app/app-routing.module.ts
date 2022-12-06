import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import {IniciarComponent} from './components/pages/iniciar/iniciar.component';

const routes: Routes = [
    {path: '', component: RegistrarComponent},
    {path: 'iniciar-sesion', component: IniciarComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
