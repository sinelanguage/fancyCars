import SERVER_URL from "../constants/server-url";
import handleHttpErrors from "./handleHttpErrors";

export default function getCars() {
  return fetch(`${SERVER_URL}/cars`)
    .then(handleHttpErrors)
    .then(res => res.json());
}
