import {
  fetchCarsRequest,
  fetchCarsSuccess,
  fetchCarsError
} from "./cars.actions";
import getCars from "../../services/cars.service";
import getAvailability from "../../services/availbility.service";

export function fetchCars() {
  return dispatch => {
    dispatch(fetchCarsRequest());
    return getCars()
      .then(inventory => {
        dispatch(fetchCarsSuccess(inventory));
        return inventory;
      })
      .then(inventory => {
        return inventory.map(car => ({
          ...car,
          availability: getAvailability(car.id)
        }));
      })
      .catch(error => dispatch(fetchCarsError(error)));
  };
}
