import {Component, OnInit} from '@angular/core';
import {FilmService} from '../shared/film/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Array<any>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getAll().subscribe(data => {
      this.films = data;
    });
  }

}
