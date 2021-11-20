import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  //url: string = `${environment.apiUrl}/api`;
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public saveUser(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(this.url, novoUsuario);
  }

  verificaExistenciaUsuario(nomeUsuario: string) {
    return this.http.get(this.url +`?userName=${nomeUsuario}`);
  }

}
