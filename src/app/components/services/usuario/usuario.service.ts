import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth: AngularFireAuth) { }

    registar({email, password}: any){
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    iniciar({email, password}: any){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

}
