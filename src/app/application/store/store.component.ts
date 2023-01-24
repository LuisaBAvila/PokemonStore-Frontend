import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/App.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  constructor(private request$ :AppService ){}

  ngOnInit():void{
    this.listProducts();

  }

  listProducts(){
    this.request$.getAllProductsInventory().subscribe(app =>{console.log(app)})
  }
}
