import {DATA} from './types';

export const setData = data => {
  return {
    type: DATA,
    data: data,
  };
};
