import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardsInterface } from '../interface/cards-interface';
import { CardsServiceService } from '../service/cards-service.service';

@Component({
  selector: 'app-navbar-cards',
  templateUrl: './navbar-cards.component.html',
  styleUrls: ['./navbar-cards.component.scss']
})
export class NavbarCardsComponent implements OnInit {

  onOff: boolean = false;

  data: CardsInterface[] = [];

  returnCard1: CardsInterface[] = [];
  returnCard2: CardsInterface[] = [];
  returnCard3: CardsInterface[] = [];
  returnCard4: CardsInterface[] = [];

  card1Data: CardsInterface[] = [];
  card2Data: CardsInterface[] = [];
  card3Data: CardsInterface[] = [];
  card4Data: CardsInterface[] = [];

  constructor(private cardsService: CardsServiceService) { }

  ngOnInit(): CardsInterface[] {
    this.returnCard1 = this.cardsService.getCard1();
    this.card1Data = this.returnCard1;
    this.returnCard2 = this.cardsService.getCard2();
    this.card2Data = this.returnCard2;
    this.returnCard3 = this.cardsService.getCard3();
    this.card3Data = this.returnCard3;
    this.returnCard4 = this.cardsService.getCard4();
    this.card4Data = this.returnCard4;
    this.showObj(this.card4Data, false);
    return this.card1Data && this.card2Data && this.card3Data;
  }

  showObj(selectedObject: CardsInterface[] | any, value: boolean) {
    this.data = this.cardsService.addData(selectedObject);
    this.cardsService.addData(selectedObject)
    if (value == false) {
      this.onOff = false;
    } else this.onOff = true;
  }


  arrowrightDisplay = false;
  arrowDisplay = false;

  @ViewChild('element') element!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  scrollRight() {
    this.element.nativeElement.scrollTo({ left: (this.element.nativeElement.scrollLeft + 150), behavior: 'smooth' });
    this.arrowrightDisplay = true;
    if (this.element.nativeElement.scrollLeft > 150) {
      this.arrowrightDisplay = true;
    }
  }

  scrollLeft(): void {
    this.element.nativeElement.scrollTo({ left: (this.element.nativeElement.scrollLeft - 150), behavior: 'smooth' });
    if (this.element.nativeElement.scrollLeft <= 150) {
      this.arrowrightDisplay = false;
    }

  }

}
