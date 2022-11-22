import { Component, OnInit } from '@angular/core';
import { createAnimation} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

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


}
