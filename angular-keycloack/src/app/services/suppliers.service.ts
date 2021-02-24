import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient, private securityService: KeycloakSecurityService) {

  }

  getSuppliers(){
    return this.http.get("http://localhost:8083/suppliers", {headers: new HttpHeaders(
      {Authorization:'Bearer '+ this.securityService.kc.token})});
  }
}
