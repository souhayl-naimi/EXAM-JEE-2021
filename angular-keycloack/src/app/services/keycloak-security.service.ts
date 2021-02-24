import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js";
import {HttpClient} from '@angular/common/http';
declare var Keycloak:any

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc:KeycloakInstance;
  constructor(private http:HttpClient) { }

  async init(){
    console.log("Security initiating...");
    this.kc = new Keycloak({
      url: "http://localhost:8080/auth",
      realm:"my-ecom-realm",
      clientId:"keycloak-angular-app"
    });
    await this.kc.init({
      onLoad:'login-required',
    });
    console.log(this.kc.token);
  }
}
