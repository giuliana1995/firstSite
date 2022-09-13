import { AppState } from './../../store/app.state';
import { getPosts } from '../state/account.selector';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Account } from '../model/account.modes';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from '../state/account.action';
import { AccountService } from 'src/app/service/account.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { of } from 'rxjs';
//import { dummyAction } from 'src/app/auth/state/auth.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private store: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(deletePost),
        switchMap((action) => {
            return this.accountService.deletePost(action.id).pipe(
                map((data) => {
                    return deletePostSuccess ({ id: action.id })
                })
            )
        })
      
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.accountService.addPost(action.account).pipe(
          map((data) => {
            const account = { ...action.account, id: data.name };
            return addPostSuccess({ account });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.accountService.updatePost(action.account).pipe(
          map((data) => {
            const updatedPost: Update<Account> = {
              id: action.account.id,
              changes: {
                ...action.account,
              },
            };
            return updatePostSuccess({ account: updatedPost });
          })
        );
      })
    );
  });
  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.accountService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });
 
   
   
}
