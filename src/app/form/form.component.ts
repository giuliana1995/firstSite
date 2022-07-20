import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(public fb: FormBuilder) {
    
    this.form = fb.group({
      "name": ['', Validators.required],
      "email": ['', Validators.required],
      "date": [''],
      //"description": [Validators.required],
    });
  }
  
  ngOnInit(): void {
  }
  
  controlName() {
    let user = this.form.controls['name'].value;
    if(user.length < 2) {
      this.form.controls['name'].setErrors({ incorect: true}) 
    } else {
      this.form.controls['name'].setErrors(null)
    }
  }

  send(): void {
    if (!this.form.valid) {
      alert("campo obbligatorio");
      return;
    } else {
      console.log(
        this.form.controls['name'].value,
        this.form.controls['email'].value,
        this.form.controls['date'].value
      );
    }

  }




}
