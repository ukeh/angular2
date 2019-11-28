import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage,} from 'angular-web-storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  key="value";
  uname;
  constructor(public local: LocalStorageService,private router: Router) { }

  ngOnInit( ) {
    
if(this.local.get(this.key)=="unni"){
  alert("hai");
  this.uname="unni";
}
else if(this.local.get(this.key)=="diyab"){
  this.uname="diyab";
}
else{
  this.router.navigate(['']);
}
  }
  logout(){
    alert("logout");
    // this.local.clear();
    console.log(this.key);
    console.log(this.local);
    this.local.remove(this.key);
    this.router.navigate(['']);

  }

}
