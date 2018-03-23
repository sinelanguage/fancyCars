import SERVER_URL from "../constants/server-url";
import handleErrors from "./handleHttpErrors";

export default function getCars() {
  return fetch(`${SERVER_URL}/cars`)
    .then(handleErrors)
    .then(res => res.json());
}
