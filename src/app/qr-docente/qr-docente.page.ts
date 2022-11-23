import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qr-docente',
  templateUrl: './qr-docente.page.html',
  styleUrls: ['./qr-docente.page.scss'],
})
export class QrDocentePage implements OnInit {
  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  generateQrCode = false;
  userDocente = '';

  constructor(public navCtrl: NavController, private activeroute: ActivatedRoute,
    private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userDocente = this.router.getCurrentNavigation().extras.state.userName;
        console.log('Dato a mostrar ' + this.userDocente);
        }
      });
  }

  ngOnInit() {
  }

  qrCode() {
    this.generateQrCode = true;
  }

}
