import {
  fetchCarsRequest,
  fetchCarsSuccess,
  fetchCarsError
} from "./cars.actions";
import getDummyUsers from "../../services/dummy-users";

export function fetchCars() {
  return dispatch => {
    dispatch(fetchCarsRequest());
    return getDummyUsers()
      .then(inventory => {
        dispatch(fetchCarsSuccess(inventory));
        return inventory;
      })
      .catch(error => dispatch(fetchCarsError(error)));
  };
}
