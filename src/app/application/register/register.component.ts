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
      console.log(this.producsList)
    });
  }


}
