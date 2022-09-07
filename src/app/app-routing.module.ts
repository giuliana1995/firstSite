import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'home', component: HomeComponent},

  {
    path: '', component: HomeComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'home', component: HomeComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
