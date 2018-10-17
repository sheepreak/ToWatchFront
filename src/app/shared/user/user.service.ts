import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/users');
  }

  getFilmsFromUserId(userId: string): Observable<any> {
    return this.http.get('//localhost:8080/user/films/' + userId);
  }

  subscribeToFilm(userId: string, filmId: string) {
    return this.http.post('//localhost:8080/user/' + userId + '/film/' + filmId,
      {},
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
