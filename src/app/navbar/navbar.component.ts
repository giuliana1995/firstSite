import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from '../interface/country';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  onClickStyle: string = "slide-out-left";
  sidenav_open: boolean = false;


  @Output() sidenavClose = new EventEmitter();

  languages: Country[] = [
    { name: "Inglese" },
    { name: "Spagnolo" },
    { name: "Italiano" },
    { name: "Francese" },
    { name: "Tedesco" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  closeButton() {
    this.sidenavClose.emit();
  }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  selectedCountry: any;
  isOpen: boolean = false;
  dynamicBtn = "";
  dynamicList = "";

  select(city: any) {
    this.selectedCountry = city;

  }

  open() {
    if (this.isOpen === false) {
      this.isOpen = true;
      this.dynamicBtn = "btn2";
      this.dynamicList = "list2"

    } else {
      this.isOpen = false;
      this.dynamicBtn = "btn";
    }
  }

}
