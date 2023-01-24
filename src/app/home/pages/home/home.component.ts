import { Component } from '@angular/core';
import { AppService } from 'src/app/services/App.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bodyProdcut!:any;
  constructor(private request$ :AppService ){}

    ngOnInit():void{


  }

  addProductToInventory(){
    Swal.fire(
      {
        html: `<div class="pt-1"><input type="text" placeholder="Nombre del producto" class="input input-bordered input-info w-full max-w-xs"  id="nameProduct"/></div>
        <div class="pt-1"><input type="text" placeholder="Cantidad de productos" class="input input-bordered input-info w-full max-w-xs"  id="inventory"/></div>
        <div class="pt-1"><input type="text" placeholder="Habilitado" class="input input-bordered input-info w-full max-w-xs"  id="enabled"/></div>
        <div class="pt-1"><input type="text" placeholder="CantidadMin" class="input input-bordered input-info w-full max-w-xs" id="quantitymin" /></div>
        <div class="pt-1"><input type="text" placeholder="CantidadMax" class="input input-bordered input-info w-full max-w-xs" id="quantitymax" /></div>
       `,
      confirmButtonColor: 'rgb(12 40 73)',
      preConfirm: ()=>{
        const nameProduct = document.getElementById('nameProduct') as HTMLInputElement;
        const quantityProducts = document.getElementById('inventory') as HTMLInputElement;
        const enabled = document.getElementById('enabled') as HTMLInputElement;
        const minProdcuts =document.getElementById('quantitymin') as HTMLInputElement;
        const maxProdcuts =document.getElementById('quantitymax') as HTMLInputElement;


        if(!nameProduct .value || !quantityProducts.value || !enabled.value || !minProdcuts.value || !maxProdcuts  ){
          Swal.showValidationMessage('Por favor ingrese la información completa')
        }
        return{
          name:nameProduct.value,
          inventory:quantityProducts.value,
          enabled:enabled.value,
          minProducts:minProdcuts.value,
          maxProducts:maxProdcuts.value
        };
      }
      }
    ).then((result)=>{
      this.bodyProdcut =result.value;
      this.request$.addProduct(this.bodyProdcut).subscribe({next:()=> console.log("register Ok"),error:console.log})

    })

  }

}
