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
    return (
      getCars()
        .then(inventory => {
          // make an array of promises with new car objects with availability
          // from the second api call
          const carPromises = inventory.map(car =>
            getAvailability(car.id).then(avail => ({ ...car, ...avail }))
          );
          // resolve all promises in the array to their values and dispatch
          return Promise.all(carPromises).then(res =>
            dispatch(fetchCarsSuccess(res))
          );
        })
        /* .then(inventory => {
        return dispatch(fetchCarsSuccess(inventory));
      }) */
        .catch(error => dispatch(fetchCarsError(error)))
    );
  };
}
