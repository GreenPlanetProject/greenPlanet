import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Usuario } from '../model/User'
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  enterUser(userLogin: UserLogin) {
    throw new Error('Method not implemented.');
  }

  enter(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8080/user/login', userLogin);
  }

  register(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/user/signup', user)

  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/user/${id}`)
  }

  Logado() {
    let ok: boolean = false
    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
