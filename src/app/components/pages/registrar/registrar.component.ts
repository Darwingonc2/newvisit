import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

    public nombre: any;
    public correo: any;

  constructor(
      private afAuth: AngularFireAuth,
      private usuarioService: UsuarioService,
      private router: Router) {
  }

  registrarUsuario = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
  });

  ngOnInit(): void {
  }

  registrar(){
    this.usuarioService.registar(this.registrarUsuario.value).then((user) => {
        this.correo = user.user.email;
        localStorage.setItem('correo', this.correo);
        this.router.navigate(['/perfil']);
    }).catch((error) => {
        console.log(error);
        alert(this.firebaseError(error.code));
    });
  }

  firebaseError(code: string) {

      switch(code){
          case 'auth/email-already-in-use':
              return 'El usuario ya existe';
          case 'auth/weak-password':
              return 'La contraseña debe ser mayor a 6 caracteres';
          case 'auth/invalid-email':
              return 'Escribe un Email valido';
          default:
              return 'Error desconocido';
      }
  }

  tengoCuenta(){
      this.router.navigate([ 'iniciar-sesion']);
  }

    iniciarConGoogle(){
        this.usuarioService.iniciarGoogle().then((user) => {
            this.nombre = user.user.displayName;
            this.correo = user.user.email;
            localStorage.setItem('nombre', this.nombre);
            localStorage.setItem('correo', this.correo);
            this.router.navigate(['/perfil']);
        }).catch((error) => {
            console.log(error);
            alert(this.firebaseError(error.code));
        });
    }

}
