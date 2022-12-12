import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxQRCodeModule, IonicModule.forRoot(), AppRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
