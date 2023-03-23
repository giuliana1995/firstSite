import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Account } from '../model/account.modes';

export interface PostsState extends EntityState<Account> {
  count: number;
}

export const postsAdapter = createEntityAdapter<Account>({
  sortComparer: sortByName,
});

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Account, b: Account): number {  
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  }
  if (compare < 0) {
    return 1;
  }
  return compare;
}
