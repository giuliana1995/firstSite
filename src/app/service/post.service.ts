import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://retoolapi.dev/KLmCaa/data`)
      .pipe(
        map((data) => { 
          const posts: Post[] = [];
          for(let key in data) {
            posts.push({...data[key], id: key});
          }
        return posts;
      })
    );
  }
};
