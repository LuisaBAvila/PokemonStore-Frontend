import { Injectable, EventEmitter,Output } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import {Observable} from 'rxjs';
import { ProductSold } from './../application/interfaces/ProductSold.inteface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getAllProductsInventory(){
    return this.http.get('http://localhost:8080/products/Allproducts')
  }

  addProductToBasket(id:string, body:any){
    return this.http.post(`${environment.urlSold}product/${id}`,body)
  }

  registerPurchase(body:any){
    return this.http.post(`${environment.urlSold}product`,body)
  }
  getAllRegister(){
    return this.http.get("http://localhost:8080/sale/allRegister");
  }
  addProduct(body:any){
    return this.http.post(`${environment.urlBase}add`,body)
  }
}
