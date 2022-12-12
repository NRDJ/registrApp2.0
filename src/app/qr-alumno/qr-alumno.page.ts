import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-alumno',
  templateUrl: './qr-alumno.page.html',
  styleUrls: ['./qr-alumno.page.scss'],
})
export class QrAlumnoPage implements OnInit {

  userAlumno = '';


  constructor(public photoService: PhotoService, public navCtrl: NavController, private activeroute: ActivatedRoute,
    private router: Router) {
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.userAlumno = this.router.getCurrentNavigation().extras.state.userName;
          console.log('Dato a mostrar ' + this.userAlumno);
          }
        });
     }

  ngOnInit() {
  }

  scan() {
    console.log('scan method working');
    this.photoService.openCamera();
  }



}
