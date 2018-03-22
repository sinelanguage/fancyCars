import {
  fetchCarsRequest,
  fetchCarsSuccess,
  fetchCarsError
} from "./cars.actions";
import getCars from "../../services/cars.service";

export function fetchCars() {
  return dispatch => {
    dispatch(fetchCarsRequest());
    return getCars()
      .then(inventory => {
        dispatch(fetchCarsSuccess(inventory));
        return inventory;
      })
      .catch(error => dispatch(fetchCarsError(error)));
  };
}
