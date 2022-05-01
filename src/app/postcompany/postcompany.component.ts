import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-postcompany',
  templateUrl: './postcompany.component.html',
  styleUrls: ['./postcompany.component.css']
})
export class PostcompanyComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrarUsuario() {
    this.auth.enter(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto

      this.router.navigate(['/register'])

    }, erro => {
      if (erro.status == 500) {
        alert('Usuario ou senha errado!')
      }

    })
  }

}
