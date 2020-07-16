import { SET_ORDERS, SET_TRADE } from '../actions/types';

const initialState = {
  askOrders: [],
  bidOrders: [],
  trade: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case SET_ORDERS:
      return {...state, ...payload};
    case SET_TRADE:
      return {...state, ...payload};
    default:
      return state;
  }
}