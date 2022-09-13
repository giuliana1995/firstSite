import {
    deletePost,
    updatePost,
    loadPostsSuccess,
    addPostSuccess,
    updatePostSuccess,
    deletePostSuccess,
  } from '../state/account.action';
  import { Action, createReducer, on } from '@ngrx/store';
  import { initialState, postsAdapter, PostsState } from '../state/account.state';
  
  const _postsReducer = createReducer(
    initialState,
    on(addPostSuccess, (state, action) => {
      return postsAdapter.addOne(action.account, {
        ...state,
        count: state.count + 1,
      });
    }),
    on(updatePostSuccess, (state, action) => {
      return postsAdapter.updateOne(action.account, state);
    }),
    on(deletePostSuccess, (state, { id }) => {
      return postsAdapter.removeOne(id, state);
    }),
    on(loadPostsSuccess, (state, action) => {
      return postsAdapter.setAll(action.account, {
        ...state,
        count: state.count + 1,
      });
    })
  );
  
  export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action);
  }
  