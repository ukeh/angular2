import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage,} from 'angular-web-storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  constructor(public local: LocalStorageService,private router: Router) { }
key="value";
  ngOnInit() {
  }
 
  onSubmit()
{
if((this.model.uname=="unni" && this.model.pwd=="1234")||(this.model.uname=="diyab" && this.model.pwd=="1234")){
this.local.set(this.key,this.model.uname);
console.log(this.local);
this.router.navigate(['home']);
}
}}
