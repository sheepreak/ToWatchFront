import { Component, OnInit } from '@angular/core';
import {UserfilmService} from '../shared/userfilm/userfilm.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  notWatched: Array<any>;
  watched: Array<any>;

  constructor(private userfilm: UserfilmService) { }

  ngOnInit() {
    this.update();
  }

  watch(filmid: string) {
    this.update();
    this.userfilm.watch(localStorage.getItem('userid'), filmid).subscribe(
      data => {console.log(data); }, error => { console.log(error); }
    );
    this.update();
  }

  unwatch(filmid: string) {
    this.update();
    this.userfilm.unwatch(localStorage.getItem('userid'), filmid).subscribe(
      data => {console.log(data); }, error => { console.log(error); }
    );
    this.update();
  }

  update() {
    console.log('here');
    this.userfilm.getAllWatchedByUser(localStorage.getItem('userid')).subscribe(data => { this.watched = data; });
    this.userfilm.getAllNotWatchedByUser(localStorage.getItem('userid')).subscribe(data => { this.notWatched = data; });
  }
}
