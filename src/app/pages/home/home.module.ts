import { AutenticacaoModule } from './../../autenticacao/autenticacao.module';
import { MensagemModule } from './../../componentes/mensagem/mensagem.module';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    AutenticacaoModule
  ],
  exports: [HomeComponent]

})
export class HomeModule { }
