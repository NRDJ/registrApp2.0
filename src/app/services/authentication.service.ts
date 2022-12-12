import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  )
  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login(user, password) {
    console.log(user);
    if (user === 'docente'){
      console.log(user);
      const navigationExtras: NavigationExtras = {
        state: {
          userId: '1234',
          userName: 'Philips Vargas',
          message: 'Bienvenido'
        }
      };
      console.log(user);
      this.storage.set('USER_INFO', navigationExtras).then((response) => {
        this.router.navigate(['qr-docente'],navigationExtras);
        this.authState.next(true);
        console.log(user);
      });
    }else{
      const navigationExtrasNOK: NavigationExtras = {
        state: {
          userId: '',
          userName: '',
          message: 'Nombre de usuario o contraseña inválidos'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasNOK).then((response) => {
        this.router.navigate(['mipaginados'], navigationExtrasNOK);
        this.authState.next(false);
      });
    }
  }
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['mipaginados']);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    console.log('value');
    return this.authState.value;
  }
}
