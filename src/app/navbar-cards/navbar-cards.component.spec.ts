import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { card1, card2, card3, card4 } from '../mockup-cards/mockup-cards';
import { CardsServiceService } from '../service/cards-service.service';
import { CardsInterface } from '../interface/cards-interface';
import { NavbarCardsComponent } from './navbar-cards.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { HomeComponent } from '../home/home.component';

describe('NavbarCardsComponent', () => {
  let component: NavbarCardsComponent;
  let fixture: ComponentFixture<NavbarCardsComponent>;
  let cardService;
  let getCardsSpy: jasmine.Spy;

  beforeEach(waitForAsync (() => {
    cardService = jasmine.createSpyObj('CardServiceService', ['getCards']);
    getCardsSpy = cardService.getCards.and.returnValue(of(card1, card2, card3, card4))
    TestBed.configureTestingModule({
      declarations: [ NavbarCardsComponent, HomeComponent, HomeCardsComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{ provide: CardsServiceService, useValue: cardService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 /*  it('la lista contiene 5 elementi', waitForAsync (() => {
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(5);
}))
 */
 /*  xit('should create', () => {
    expect(component).toBeTruthy();
  }); */
  
 /*  it('deve chiamare cardServiceService', waitForAsync(() => {
    expect(getCardsSpy.calls.any()).toBe(false);
  })) */
});
