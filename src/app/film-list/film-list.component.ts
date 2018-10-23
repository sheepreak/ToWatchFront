import {Component, OnInit} from '@angular/core';
import {FilmService} from '../shared/film/film.service';
import {UserService} from '../shared/user/user.service';
import {UserfilmService} from '../shared/userfilm/userfilm.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Array<any>;
  subs: Map<string, number>;
  watched: Map<string, number>;
  subscribed: Map<string, boolean>;
  isLoggedIn: boolean;


  constructor(private filmService: FilmService, private userService: UserService, private userFilmService: UserfilmService) {

  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.subs = new Map<string, number>();
    this.watched = new Map<string, number>();
    this.subscribed = new Map<string, boolean>();

    this.filmService.getAll().subscribe(data => {
      this.films = data;
      this.userService.getFilmsFromUserId(localStorage.getItem('userid')).subscribe(
        data2 => {
          console.log(this.films);
          for (const i of this.films) {
            for (const j of data2) {
              if (j.film.id === i.id) {
                this.subscribed.set(i.id, true);
                break;
              } else {
                this.subscribed.set(i.id, false);
              }
            }
          }
        }
      );
      this.updateCounts();
    });


  }

  subscribe(filmId: string) {
    this.userService.subscribeToFilm(localStorage.getItem('userid'), filmId).subscribe(
      data => {this.subscribed.set(filmId, true); this.updateCounts(); }, error => {console.log('couldn\'t retrieve info'); }
    );
  }

  updateCounts() {
    for (const film of this.films) {
      this.userFilmService.countSubs(film.id).subscribe(
        data => {
          this.subs.set(film.id, data);
        }, error => {}
      );
      this.userFilmService.countWatched(film.id).subscribe(
        data => {
          this.watched.set(film.id, data);
        }, error => {}
      );
    }
  }
}
