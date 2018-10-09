import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any>;

  constructor(private userService: UserService) { }


  // dans le init on initialise la vue avec les objets qui seront affiché directement
  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  // ici méthodes pour opérations sur la vue chargée (inputs, clicks...)
}
