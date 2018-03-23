import SERVER_URL from "../constants/server-url";
import handleHttpErrors from "./handleHttpErrors";

export default function getAvailbility(id) {
  return fetch(`${SERVER_URL}/availability/${id}`)
    .then(handleHttpErrors)
    .then(res => res.json());
}
