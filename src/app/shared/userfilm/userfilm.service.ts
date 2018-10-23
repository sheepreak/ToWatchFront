import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserfilmService {

  constructor(private http: HttpClient) { }

  getAllWatchedByUser(userId: string): Observable<any> {
    return this.http.get('//localhost:8080/watched/' + userId);
  }

  getAllNotWatchedByUser(userId: string): Observable<any> {
    return this.http.get('//localhost:8080/notwatched/' + userId);
  }

  countSubs(filmId: string): Observable<any> {
    return this.http.get('//localhost:8080/countsubs/' + filmId);
  }

  countWatched(filmId: string): Observable<any> {
    return this.http.get('//localhost:8080/countwatched/' + filmId);
  }

  watch(userId: string, filmId: string) {
    return this.http.post('//localhost:8080/watch',
      {'userid' : userId, 'filmid' : filmId},
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  unwatch(userId: string, filmId: string) {
    return this.http.post('//localhost:8080/unwatch',
      {'userid' : userId, 'filmid' : filmId},
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
