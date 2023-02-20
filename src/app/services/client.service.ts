import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {



  constructor(private http: HttpClient) { }




  getClientes():Observable<any>{

    return this.http.get('http://localhost:3000/api/clientes')
  }

  getTelefonos():Observable<any>{

    return this.http.get('http://localhost:3000/api/telefonos')
  }

  getReparaciones():Observable<any>{

    return this.http.get('http://localhost:3000/api/reparaciones')
  }




}
