import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
  SORT_APHABETICALLY,
  SORT_BY_AVAILABILITY,
  SORT_DEFAULT
} from "../actions/action.types";

// we use array.prototype.slice so that we don't mutate the incoming array
// and always return a new sorted array to state
const sortStringsByKey = (inventory, key) =>
  inventory.slice().sort((a, b) => {
    const first = a[key].toLowerCase();
    const second = b[key].toLowerCase();
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

const sortIdStringsByKey = (inventory, key) =>
  inventory.slice().sort((a, b) => {
    const first = parseInt(a[key], 10);
    const second = parseInt(b[key], 10);
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

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

    case SORT_APHABETICALLY:
      return {
        ...state,
        inventory: sortStringsByKey(state.inventory, "make")
      };

    case SORT_BY_AVAILABILITY:
      return {
        ...state,
        inventory: sortStringsByKey(state.inventory, "availability")
      };

    case SORT_DEFAULT:
      return {
        ...state,
        inventory: sortIdStringsByKey(state.inventory, "id")
      };

    default:
      return state;
  }
}
