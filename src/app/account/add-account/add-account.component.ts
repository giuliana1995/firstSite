import { Account } from '../model/account.modes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/account.action';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  title = new FormControl("", [Validators.required, Validators.minLength(1)]);
  description = new FormControl("", [Validators.required, Validators.minLength(1)])

  account: FormGroup;

  constructor(private store: Store<AppState>) { 

    this.account = new FormGroup({
      title: this.title,
      description: this.description,
    })
  }


  ngOnInit(): void {
  }

  onAddPost() {
    if (!this.account.valid) {
      return;
    }

    const account: Account = {
      title: this.account.value.title,
      description: this.account.value.description,
      id: '',
    };
    this.store.dispatch(addPost({account}));
  }


}
