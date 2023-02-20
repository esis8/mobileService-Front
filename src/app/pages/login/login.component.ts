import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router){}

email: string = '';
password: string = '';

inputEmail: boolean = false;
inputPassword: boolean = false;
inputValidar : boolean = false;

spin: boolean = false;

ngOnInit():void{
  if(sessionStorage.getItem('login')){
    this.router.navigate(['/servicios'])
  }
}


validarPassword(text:string):boolean{
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return regex.test(text);
}

vaildarEmail(text:string):boolean{
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(text);
}


validarInputEmail():void{

  if(this.vaildarEmail(this.email)){
    this.inputEmail = false;
  }else{
    this.inputEmail = true;
  }
}

validarInputPassword():void{

  if(this.validarPassword(this.password)){
    this.inputPassword = false;
  }else{
    this.inputPassword = true;
  }
}


login():void{
  this.validarInputEmail();
  this.validarInputPassword();
  if(!this.inputEmail && !this.inputPassword){
    console.log(this.email);
    console.log(this.password)
    this.spin = true
    setTimeout(()=>{
      this.spin = false
      if(this.email === "admin@admin.com" && this.password === "Prueba123*"){
        sessionStorage.setItem('login', 'true')
        this.router.navigate(['/servicios'])
      }else{
        this.inputValidar = true
      }

  },2000);
  }

}

}
