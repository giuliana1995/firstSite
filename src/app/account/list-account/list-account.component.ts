import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.modes';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getCount, getPosts } from '../state/account.selector';
import { deletePost, loadPosts } from '../state/account.action';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {

  accounts!: Observable<Account[]>;
  count!: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.accounts = this.store.select(getPosts);
    this.count = this.store.select(getCount);
    this.store.dispatch(loadPosts());

  }

  onDeletePost(id: string) {
    this.store.dispatch(deletePost({ id }))
  }


}
