import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  url = 'http://localhost:3000/users';

  autenticar(usuario: string, senha: string): Observable<any> {
    this.autenticar1(usuario, senha);
    //console.log(this.usuarioService.retornaUsuario2());
    return this.httpClient.get(this.url + `?userName=${usuario}&password=${senha}`);
  }

  autenticar1(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.get(
      this.url,
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        console.log(`token:${authToken}`);
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
