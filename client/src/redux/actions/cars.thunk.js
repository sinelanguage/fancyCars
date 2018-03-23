import {
  fetchCarsRequest,
  fetchCarsSuccess,
  fetchCarsError
} from "./cars.actions";
import getCars from "../../services/cars.service";
import getAvailability from "../../services/availbility.service";

function showAvailabilityStatus(inventory) {
  return inventory.map(car => ({
    ...car,
    ...getAvailability(car.id)
  }));
}

export function fetchCars() {
  return dispatch => {
    dispatch(fetchCarsRequest());
    return getCars()
      .then(inventory => {
        const withAvailabilityStatus = showAvailabilityStatus(inventory);
        dispatch(fetchCarsSuccess(withAvailabilityStatus));
        return withAvailabilityStatus;
      })
      .catch(error => dispatch(fetchCarsError(error)));
  };
}
