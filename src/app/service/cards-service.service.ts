import { Injectable } from '@angular/core';
//import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { CardsInterface } from '../interface/cards-interface';
import { card1, card2, card3 } from '../mockup-cards/mockup-cards';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  private card1: CardsInterface[] = card1;
  private card2: CardsInterface[] = card2;
  private card3: CardsInterface[] = card3;
  

  constructor() { }

  getCard1() {
    return this.card1;
  }

  getCard2() {
    return this.card2;
  }

  getCard3() {
    return this.card3;
  }

  getCard4() {
    return this.card3;
  }

  addData(selectedObject: CardsInterface[]) {
    return selectedObject;

  }

}
