import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=> kcSecurity.init()
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
