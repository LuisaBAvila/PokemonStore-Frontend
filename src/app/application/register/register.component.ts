import { Component } from '@angular/core';
import { AppService } from 'src/app/services/App.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  listRegister !:any;
  producsList !:any;
  nameProduct:string='';
  quantity:number=0;


  constructor(private request$ :AppService ){}
  ngOnInit():void{
    this.getALlRegister();


  }

  getALlRegister(){
    this.request$.getAllRegister().subscribe((register)=>{this.listRegister=register; this.getProducts(); })
  }

  getProducts(){
    this.listRegister.forEach((element:any) => {
      this.producsList=element.products;
    });
  }

  getdetailProduct(id:string){
    this.request$.getProductId(id).subscribe((detail:any)=> {this.nameProduct=detail.name, this.quantity= detail.inventory})
  }


}
