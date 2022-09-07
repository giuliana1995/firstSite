import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCardsComponent } from './navbar-cards.component';

describe('NavbarCardsComponent', () => {
  let component: NavbarCardsComponent;
  let fixture: ComponentFixture<NavbarCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
