import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS
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
