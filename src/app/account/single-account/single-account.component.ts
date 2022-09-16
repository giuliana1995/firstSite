import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Account } from '../model/account.modes';
import { getPostById } from '../state/account.selector';

@Component({
  selector: 'app-single-account',
  templateUrl: './single-account.component.html',
  styleUrls: ['./single-account.component.scss']
})
export class SingleAccountComponent implements OnInit {

  account!: Observable<Account>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getPostById);
  }

}
