import { APP_LOAD } from '../constants/action-types';

const initialState = {
  loaded: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      state = {
        ...state,
        loaded: true,
      };
      break;
    default:
      return state;
  }

  return state;
};

export default AppReducer;
