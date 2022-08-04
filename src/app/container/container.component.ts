import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  

  constructor() { }

  ngOnInit(): void {
  }
  
  public onSidenav = () => {
    this.sidenavToggle.emit();
  };

  public toggle = (close: boolean) => {
    
  }
}
