import { Component, OnInit } from '@angular/core';
import { createAnimation} from '@ionic/angular';
import { FormBuilder, FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  // value = 'nriedeldj';
  // token = 'token1234';

  // usuario = new FormGroup({
  //   user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
  //   pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(9)]),
  // });

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
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

  loginUser() {
    this.router.navigate(['/qr-docente']);
  }

}
