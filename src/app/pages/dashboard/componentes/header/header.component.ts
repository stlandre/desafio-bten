import { UsuarioService } from './../../../../autenticacao/usuario/usuario.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.usuarioService.retornaUsuario();
  usuario$ = this.usuarioService.retornaUsuario2();
  logado = this.usuarioService.estaLogado();

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    //this.router.navigate(['']); //não está funcionando... Why?
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

}
