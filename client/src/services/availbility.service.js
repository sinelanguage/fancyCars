import SERVER_URL from "../constants/server-url";
import handleErrors from "./handleHttpErrors";

export default function getAvailbility(id) {
  return fetch(`${SERVER_URL}/availability/${id}`)
    .then(handleErrors)
    .then(res => res.json());
}
