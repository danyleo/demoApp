import {DATA} from '../actions/types';

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
