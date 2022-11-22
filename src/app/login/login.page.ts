import { Component, OnInit } from '@angular/core';
import { createAnimation} from '@ionic/angular';
import { FormControl,FormGroup,Validators   } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  value = 'nriedeldj';
  token = 'token1234';

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
  });

  constructor() { }

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

  loginUser() {
    console.log('test');
  }

}
