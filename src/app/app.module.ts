import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//qr code
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

//storage for variables
import { IonicStorageModule } from '@ionic/storage-angular';

//authguard login
import {AuthGuard} from './guards/auth/auth-guard.service';
import {AuthenticationService} from './services/authentication.service';

//api
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, IonicStorageModule.forRoot(), BrowserModule, NgxQRCodeModule, IonicModule.forRoot(), AppRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthGuard, AuthenticationService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
