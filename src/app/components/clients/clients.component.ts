import { Component, OnInit, Input } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  constructor(private clientService: ClientService){  }


  clientes: any;
  telefonos: any;
  reparaciones: any;

  @Input() setClientes: boolean = false;
  @Input() setTelefonos: boolean = false;
  @Input() setReparaciones: boolean = false;


  ngOnInit(): void {



    this.clientService.getClientes().subscribe((data)=>{
      this.clientes = data;
    })

    this.clientService.getTelefonos().subscribe((data)=>{
      this.telefonos = data;
    })

    this.clientService.getReparaciones().subscribe((data)=>{
      this.reparaciones = data;
    })

  }

}
