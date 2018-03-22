import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS
} from "../actions/action.types";

const initialState = {
  inventory: [],
  loading: false,
  error: null
};

export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        inventory: action.payload
      };

    case FETCH_CARS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        inventory: []
      };

    default:
      return state;
  }
}
