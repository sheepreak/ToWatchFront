import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmListComponent} from './film-list/film-list.component';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'films', component: FilmListComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
