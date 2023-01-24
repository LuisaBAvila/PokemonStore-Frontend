import { Injectable, EventEmitter,Output } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getAllProductsInventory(){
    return this.http.get('http://localhost:8080/products/Allproducts')
  }
}
