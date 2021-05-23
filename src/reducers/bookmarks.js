import objectHash from 'object-hash';
import { ADD_BOOK_TO_BOOKMARK } from '../utils/actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK_TO_BOOKMARK:
      if (
        !state.find((el) => {
          if (objectHash(action.payload) === objectHash(el)) {
            return true;
          }
          return false;
        })
      ) {
        return [...state, action.payload];
      }
      return state;

    default:
      return state;
  }
};
