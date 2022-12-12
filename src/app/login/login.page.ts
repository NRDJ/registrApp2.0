import { Component } from '@angular/core';
import { AlertController,NavController,AnimationController,createAnimation} from '@ionic/angular';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  value = 'nriedel';

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
  });

  constructor(private authService: AuthenticationService,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController) {
  }

  ionViewDidEnter(){
    this.animation();
  }

  animation() {
    const animation = createAnimation()
   .addElement(document.querySelector('.title'))
   .duration(1500)
   .iterations(Infinity)
   .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
   .fromTo('opacity', '1', '0.2');
    animation.play();
  }

  sendDetailsWithState() {
    const navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/home'],navigationExtras); // Esta linea es la que me permite navegar a otro page
  }

  loginUser() {
    if ((this.usuario.value.user.trim()!=='') && ((this.usuario.value.pass.trim()!==''))){
      this.authService.login(this.usuario.value.user, this.usuario.value.pass);
    }
  }

  //Metodo para navegar desde un metodo llamado desde el html
  goToPagina2(){
    console.log('entramos al metodo');
    if('nriedel' === this.usuario.value.user){
      this.sendDetailsWithState();
    }else{
      this.presentAlert();
    }
    // this.navCtrl.navigateForward('/home');
  }


    //Metodo de alerta
    async presentAlert(){
      const alert = await this.alertController.create({
        header: 'Error Login',
        subHeader: 'Infomación : ',
        message: 'Usuario o contraseña son incorrecto',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }

  // loginUser() {
  //   this.router.navigate(['/qr-docente']);
  // }

}
