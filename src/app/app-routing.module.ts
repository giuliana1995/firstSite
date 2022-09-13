import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AddAccountComponent } from './account/add-account/add-account.component';


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
  },
  {
    path: 'account',
    loadChildren: () => 
      import('./account/post.module').then((m) => m.PostsModule), 
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
