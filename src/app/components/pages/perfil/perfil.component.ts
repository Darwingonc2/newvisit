import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

    public nombre: any;
    public correo: any;

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
      this.nombre = localStorage.getItem('nombre');
      this.correo = localStorage.getItem('correo');
  }

  logout(){
      this.usuarioService.logout().then((user) => {
          localStorage.clear();
          console.log(user);
          this.router.navigate(['/iniciar-sesion']);
      }).catch((error) => {
          console.log(error);
          alert(this.firebaseError(error.code));
      });
  }

    firebaseError(code: string) {

        switch(code){
            case 'auth/user-not-found':
                return 'El usuario no existe';
            case 'auth/wrong-password':
                return 'La contraseña es incorrecta';
            default:
                return 'Error desconocido';
        }
    }

}
