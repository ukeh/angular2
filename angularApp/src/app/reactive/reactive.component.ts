import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, Form} from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  registerForm: FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }

get f(){
  return this.registerForm.controls;
}

onSubmit(){
  console.log(this.f)
  this.submitted=true;

  if(this.registerForm.invalid){
return;
  }
  alert("Success :-"+this.registerForm.get("firstName").value);
}



}
