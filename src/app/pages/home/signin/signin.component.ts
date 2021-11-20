import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuario } from './novo-usuario';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from './signin.service';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaValidator } from './usuario-senha.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [
        '',
        [Validators.required, minusculoValidator],
        [this.usuarioExisteService.usuarioExiste()]
      ],
      password: [''],
    },
    {
      validators: [usuarioSenhaValidator],
    }
    )


  }


  cadastrar(){
    if (this.signinForm.valid) {
      const novoUsuario = this.signinForm.getRawValue() as NovoUsuario;
      this.signinService.saveUser(novoUsuario).subscribe(
        () => {
          alert('Usuário cadastrado');
          this.router.navigate(['']);
        },
        (error) => {
          alert('Erro ao cadastrar');
          console.log(error);
        }
      )
    }

  }

}
