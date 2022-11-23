import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrDocentePageRoutingModule } from './qr-docente-routing.module';

import { QrDocentePage } from './qr-docente.page';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    QrDocentePageRoutingModule
  ],
  declarations: [QrDocentePage]
})
export class QrDocentePageModule {}
