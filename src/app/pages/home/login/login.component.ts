import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { NovoUsuario } from '../signin/novo-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = "";
  senha = "";

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
/*     this.authService.autenticar1(this.usuario, this.senha).subscribe(
      ()=>{
        console.log('Autenticado com sucesso');
        //this.router.navigate(['dashboard']);
      },
      (error)=> {
        alert('Usuário ou senha inválido(s)');
        console.log(error);
      }
    ); */

    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (res)=>{
        const lista = res as Array<NovoUsuario>;
        if (lista.length == 1) {
          console.log('Autenticado com sucesso');
          this.router.navigate(['dashboard']);
        } else {
          alert('Usuário ou senha inválido(s)');
        }
      }
    );
  }

}
