import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }
  getService():Observable<any>{
    return this.http.get(
      "https://5f0459878b06d60016dde847.mockapi.io/blogs");
  
  }

  getPost(data):Observable<any> {
    return this.http.get(`https://5f0459878b06d60016dde847.mockapi.io/blogs/${data}`);
  }
}
