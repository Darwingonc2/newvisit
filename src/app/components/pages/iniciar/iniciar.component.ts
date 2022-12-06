import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})
export class IniciarComponent implements OnInit {

    iniciarSesion = new FormGroup({
        password: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    });

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
  }

    iniciar(){
        this.usuarioService.iniciar(this.iniciarSesion.value).then((user) => {
            console.log(user);
            this.router.navigate(['/perfil']);
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
            case 'auth/invalid-email':
                return 'El correo es invalido';
            case 'auth/popup-closed-by-user':
                return 'Has cerrado la pestaña';
            case 'auth/cancelled-popup-request':
                return 'Ha habido un error intentalo de nuevo';
            case 'auth/too-many-requests':
                return 'El acceso a esta cuenta ha sido bloqueado temporalmente intentalo mas tarde';
            default:
                return 'Error desconocido';
        }
    }

    registro(){
      this.router.navigate(['/']);
    }

    iniciarConGoogle(){
        this.usuarioService.iniciarGoogle().then((user) => {
            console.log(user);
            this.router.navigate(['/perfil']);
        }).catch((error) => {
            console.log(error);
            alert(this.firebaseError(error.code));
        });
    }

}
