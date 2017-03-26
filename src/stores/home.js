import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return {
      name: action.name
    };
  default:
    return {
      name: 'TOM'
    };
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
