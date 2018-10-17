import {Component, OnInit} from '@angular/core';
import {FilmService} from '../shared/film/film.service';
import {UserService} from '../shared/user/user.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Array<any>;
  subscribed: Map<string, boolean>;
  isLoggedIn: boolean;


  constructor(private filmService: FilmService, private userService: UserService) {

  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.filmService.getAll().subscribe(data => {
      this.films = data;
    });

    this.subscribed = new Map<string, boolean>();

    this.userService.getFilmsFromUserId(localStorage.getItem('userid')).subscribe(
      data => {
        console.log(data);
        for (const i of this.films) {
          for (const j of data) {
            if (j.film.id === i.id) {
              this.subscribed.set(i.id, true);
            } else {
              this.subscribed.set(i.id, false);
            }
          }
        }
      }
    );

    console.log(this.subscribed);

  }

  subscribe(filmId: string) {
    this.userService.subscribeToFilm(localStorage.getItem('userid'), filmId).subscribe(
      data => {this.subscribed.set(filmId, true); }, error => {console.log('couldn\'t retrieve info'); }
    );
  }
}
