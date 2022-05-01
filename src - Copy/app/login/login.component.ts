import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrarUsuario() {

    if (this.usuario.senha != this.confirmarSenha) {
      alert("Senhas incorretas")
    } else {
      this.authService.register(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp

        alert('Usuario cadastrado com sucesso!')

        this.router.navigate(['/register'])
      })
    }
  }

}
