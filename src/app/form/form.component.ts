import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  name = new FormControl("", [Validators.required]);
  surname = new FormControl("", [Validators.required]);
  data = new FormControl("",[Validators.required]);
  email = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);

  access: boolean = false;
  load: boolean = false;
  form: FormGroup;
  
  constructor() {
    
    this.form = new FormGroup({
      name: this.name, 
      surname: this.surname,
      data: this.data,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  loader() {
    this.load = !this.load;
  }

  accessOccurred() {
    this.access = !this.access;
    this.load = false;
  }
  
  save(value: any) {
    console.log(value);
    setTimeout(() => {
    }, 1000);
    this.loader();
    setTimeout(() => {
      this.accessOccurred();
      this.name.reset();
      this.surname.reset();
    }, 3000);
  }
}
