import {Component, Input} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Watch';
  @Input() isLoggedIn = localStorage.getItem('isLoggedIn');
  @Input() username = localStorage.getItem('username');

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
