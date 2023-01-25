import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'


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
  deleteProduct(id:string){
    return this.http.delete(`${environment.urlBase}delteProduct/${id}`)
  }
  updateProdcut(id:string,body:any){
    return this.http.put(`${environment.urlBase}update/${id}`,body)
  }
  getProductId(id:string){
    return this.http.get(`${environment.urlBase}byId/${id}`)
  }
}
