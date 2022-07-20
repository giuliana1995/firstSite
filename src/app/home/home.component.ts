import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string = "Green peace";

  show: boolean = false;

  size: string = "none";

  selectField: FormControl = new FormControl("3");


  constructor() { 

  }

  ngOnInit(): void {
  }

  showAbout(): void {
    this.show = !this.show;
  }

  fontSize(){
    if(this.selectField.value == "1"){
      this.size = "big";
    } else if (this.selectField.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  } 

}
