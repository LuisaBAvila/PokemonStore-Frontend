import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/services/App.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  bodyProduct!: any;

  @Input('idProdcutUpdate') idProdcutUpdate!: string;


  constructor(private request$ :AppService ){}


  deleteProdcut(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esta operación",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.request$.deleteProduct(this.idProdcutUpdate).subscribe(()=>{ Swal.fire(
          'Deleted!',
          'Tu aplicacion ha sido eliminada.',
          'success'
        ) })

      }
    })

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
      this.bodyProduct =result.value;
      this.request$.updateProdcut(this.idProdcutUpdate,this.bodyProduct).subscribe(()=>{
        Swal.fire(
          'Actualizada',
          'Tu aplicacion ha sido actualizada',
          'success'
        )
      })

    })

  }


}
