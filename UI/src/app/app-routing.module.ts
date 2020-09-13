import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
   },
  {
    path:'user',component:UserComponent,
    children:[
      {
        path:'registration',component:RegistrationComponent,

      },{
        path:'login',component:LoginComponent
      }
    ]
  },
  {
    path:'**',component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
