import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  // colocar a api abaixo
  private url = "https://swapi.dev/api/ + people/1/"

  constructor(private http: HttpClient) {

  }

  recuperarSwapiInfo(path: string) {
    return this.http.get(this.url.concat(path), { headers: this.loadHeaders()})
  }

  //exemplo post
  postInfoRandom(path: string, body: Object) {
    return this.http.post(this.url.concat(path), body, { headers: this.loadHeaders()})
  }

  public loadHeaders (token?: string){
    // console.log(token)
    return new HttpHeaders({
      'Content-type': 'application/json',
      // 'Authorization': `Bearer ${token}`
    });
  }

}
