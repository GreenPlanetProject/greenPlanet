import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostProduct } from '../model/PostProduct';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(): Observable<PostProduct[]> {
    return this.http.get<PostProduct[]>('http://localhost:8080/post')
  }

  getByIdPostagem(id: number): Observable<PostProduct> {
    return this.http.get<PostProduct>(`http://localhost:8080/post/${id}`)
  }

  getByTituloPostagem(titulo: string): Observable<PostProduct[]> {
    return this.http.get<PostProduct[]>(`http://localhost:8080/post/titulo/${titulo}`)
  }


  postPostagem(postagem: PostProduct): Observable<PostProduct> {
    return this.http.post<PostProduct>('http://localhost:8080/post', postagem)
  }

  putPostagem(postagem: PostProduct): Observable<PostProduct> {
    return this.http.put<PostProduct>('http://localhost:8080/post', postagem)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagem/${id}`)
  }

}
