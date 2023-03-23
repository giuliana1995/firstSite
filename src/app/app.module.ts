import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
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
import { AddAccountComponent } from './account/add-account/add-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { PostsEffects } from '../app/account/state/account.effect';
import { SingleAccountComponent } from './account/single-account/single-account.component'
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/custom-serializer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




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
    SingleAccountComponent,
    FormListComponent,
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
    HttpClientModule,
    EffectsModule.forRoot([PostsEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
