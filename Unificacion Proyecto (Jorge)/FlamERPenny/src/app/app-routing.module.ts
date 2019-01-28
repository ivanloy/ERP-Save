import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component' 
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hamburger', component: MainNavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
