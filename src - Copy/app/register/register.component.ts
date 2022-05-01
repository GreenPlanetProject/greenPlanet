import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';



import { PostProduct } from '../model/PostProduct';
import { Usuario } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  postagem: PostProduct = new PostProduct()
  listaPostagens: PostProduct[]

  usuario: Usuario = new Usuario()
  foto = environment.foto
  nome = environment.nome
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService

  ) { }

  ngOnInit() {

    window.scroll(0, 0)
    this.getAllPostagens()
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostProduct[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }

  publicar() {

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: PostProduct) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new PostProduct()
    })
  }

}
