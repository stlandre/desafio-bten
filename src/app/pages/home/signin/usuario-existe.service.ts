import { SigninService } from './signin.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private signinService: SigninService) { }

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.signinService.verificaExistenciaUsuario(nomeUsuario)
        ),
        map((existe) =>
          {
            const lista = existe as Array<NovoUsuario>;
            if(lista.length == 1){
              return {usuarioExistente: true};
            } else {
              return null;
            }
          }
        ),
        first()
      );
    };
  }
}
