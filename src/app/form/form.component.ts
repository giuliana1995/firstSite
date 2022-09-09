import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  name = new FormControl("", [Validators.required, Validators.minLength(1)]);
  surname = new FormControl("", [Validators.required, Validators.minLength(1)]);
  data = new FormControl("",[Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required, Validators.minLength(8)]);


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
      this.data.reset();
      this.email.reset();
      this.password.reset();
    }, 3000);
  }



  // controlName() {
  //   let user = this.form.controls['name'].value;
  //   if(user.length < 2) {
  //     this.form.controls['name'].setErrors({ incorect: true}) 
  //   } else {
  //     this.form.controls['name'].setErrors(null)
  //   }
  // }

  // send(): void {
  //   if (!this.form.valid) {
  //     console.log("campo obbligatorio");
  //     return;
  //   } else {
  //     console.log(
  //       this.form.controls['name'].value,
  //       this.form.controls['email'].value,
  //       this.form.controls['date'].value
  //     );
  //   }
  //}


}
