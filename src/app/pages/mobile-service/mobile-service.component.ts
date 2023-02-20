import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-service',
  templateUrl: './mobile-service.component.html',
  styleUrls: ['./mobile-service.component.scss']
})
export class MobileServiceComponent {

  setClientes:boolean = false;
  setTelefonos:boolean = false;
  setReparaciones:boolean = false;


  verClientes(){

    this.setClientes = true;
    this.setTelefonos = false;
    this.setReparaciones = false;

  }

  verTelefonos(){

    this.setClientes = false;
    this.setTelefonos = true;
    this.setReparaciones = false;
  }

  verReparaciones(){

    this.setClientes = false;
    this.setTelefonos = false;
    this.setReparaciones = true;
  }

}
