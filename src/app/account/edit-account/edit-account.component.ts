import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Account } from '../model/account.modes';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { getPostById } from '../state/account.selector';
import { updatePost } from '../state/account.action';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  account!: Account;
  accountForm!: FormGroup;
  accountSubscriptio!: Subscription;

  constructor(private store: Store<AppState>, private router: Router ) { }

  ngOnInit(): void {
    this.createForm();
    this.store.select(getPostById).subscribe((account) => {
      if (account) {
        this.account = account;
        this.accountForm.patchValue({
          title: account.title,
          description: account.description,
        });
      }
    });

  }

  createForm() {
    this.accountForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.accountForm.valid) {
      return;
    }

    const title = this.accountForm.value.title;
    const description = this.accountForm.value.description;

    const account: Account = {
      id: this.account.id,
      title,
      description,
    };

    this.store.dispatch(updatePost({ account }));
    this.router.navigate(['account']);
  }

  ngOnDestroy() {
    if (this.accountSubscriptio) {
      this.accountSubscriptio.unsubscribe();
    }
  }
}
