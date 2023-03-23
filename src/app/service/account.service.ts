import { Injectable } from '@angular/core';
import { Account } from '../account/model/account.modes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Account[]> {
    return this.http
      .get<Account[]>(`https://retoolapi.dev/KLmCaa/data`)
      .pipe(
        map((data) => {
          const posts: Account[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: Account): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      post
    );
  }

  updatePost(post: Account) {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `https://vue-completecourse.firebaseio.com/posts/${id}.json`,
    );
  }

  getPostById(id: string): Observable<Account> {
    return this.http.get<Account>(
      `https://vue-completecourse.firebaseio.com/posts/${id}.json`
    );
  }
}



