import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { NavbarCardsComponent } from './navbar-cards/navbar-cards.component';
import { FormListComponent } from './form-list/form-list.component';
import { AccountComponent } from './account/account.component';
import { StoreModule } from '@ngrx/store';


@NgModule({

  declarations: [

    AppComponent,
    HomeComponent,
    FormComponent,
    FooterComponent,
    NavbarComponent,
    ContainerComponent,
    HomeCardsComponent,
    NavbarCardsComponent,
    FormListComponent,
    AccountComponent,
  ],
   
  imports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    StoreModule.forRoot({  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
