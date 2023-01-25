import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/App.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  listProducts!:any;
  quantity:number=0;
  bodyProductSold!: any;
  bodyBuyer !:any;
  stateProdcutModal:boolean =false;
  idProdcutUpdate!:string;
  constructor(private request$ :AppService ){}

  ngOnInit():void{
    this.getlistProducts();
  }
  getlistProducts(){
    this.request$.getAllProductsInventory().subscribe((prodcuts) =>{ this.listProducts=prodcuts, console.log(prodcuts)})

  }

  updateProdcuts(id: string){

    this.idProdcutUpdate =id;
    console.log(this.idProdcutUpdate)

  }

  addProducts(id :string, min:string,max:string){
    Swal.fire(
      {
        html: `<div class="pt-1"><input type="text" placeholder="TypeID" class="input input-bordered input-info w-full max-w-xs"  id="typeId"/></div>
        <div class="pt-1"><input type="text" placeholder="id Usuario" class="input input-bordered input-info w-full max-w-xs"  id="userId"/></div>
        <div class="pt-1"><input type="text" placeholder="nameUser" class="input input-bordered input-info w-full max-w-xs"  id="userName"/></div>
        <div class="pt-1"><input type="text" placeholder="Cantidad" class="input input-bordered input-info w-full max-w-xs" id="quantity" /></div>
       `,
      confirmButtonColor: 'rgb(12 40 73)',
      preConfirm: ()=>{
        const cantidad = document.getElementById('quantity') as HTMLInputElement;
        const userID = document.getElementById('userId') as HTMLInputElement;
        const nameUser= document.getElementById('userName') as HTMLInputElement;
        const typeId=document.getElementById('typeId') as HTMLInputElement;
        if(!cantidad.value || !userID.value || !nameUser.value || !typeId.value ){
          Swal.showValidationMessage('Por favor ingrese la información completa')
        }
        if(cantidad.value < min || cantidad.value > max ){
          Swal.showValidationMessage('No cumple con la cantidad de prodcutos requeridos')
        }
        return{
          productSold:{
            quantity: cantidad.value,
            idClient: userID.value
          },
          buyer:{
            date:"2014-01-01T23:28:56.782Z",
            idType:typeId.value,
            idClient:userID.value,
            clientName:nameUser.value
          }
        };
      }
      }
    ).then((result)=>{
      this.bodyProductSold = result.value?.productSold;
      this.bodyBuyer = result.value?.buyer;
      this.request$.addProductToBasket(id,this.bodyProductSold).subscribe(()=> {
        this.getlistProducts();
      });
      this.request$.registerPurchase(this.bodyBuyer).subscribe({next:()=> console.log("register Ok"),error:console.log});
    })
  }



}
