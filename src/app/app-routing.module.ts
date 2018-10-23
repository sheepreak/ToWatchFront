import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmListComponent} from './film-list/film-list.component';
import {HomeComponent} from './home/home.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'films', component: FilmListComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: AuthenticationComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
