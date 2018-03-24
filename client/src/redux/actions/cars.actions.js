import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
  SORT_APHABETICALLY,
  SORT_BY_AVAILABILITY,
  SORT_DEFAULT
} from "./action.types";

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST
});

export const fetchCarsSuccess = inventory => ({
  type: FETCH_CARS_SUCCESS,
  payload: inventory
});

export const fetchCarsError = error => ({
  type: FETCH_CARS_ERROR,
  payload: error
});

export const sortCarsDefault = () => ({ type: SORT_DEFAULT });

export const sortCarsAlphabetically = () => ({ type: SORT_APHABETICALLY });

export const sortCarsByAvailability = () => ({ type: SORT_BY_AVAILABILITY });
