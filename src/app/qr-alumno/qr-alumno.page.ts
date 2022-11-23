import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-qr-alumno',
  templateUrl: './qr-alumno.page.html',
  styleUrls: ['./qr-alumno.page.scss'],
})
export class QrAlumnoPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

  scan() {
    console.log('scan method working');
    this.photoService.openCamera();
  }



}
