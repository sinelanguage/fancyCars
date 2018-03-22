import SERVER_URL from "../constants/server-url";

export default function getCars() {
  return fetch(`${SERVER_URL}/cars`)
    .then(handleErrors)
    .then(res => res.json());
}

// Fetch API does not handle http errors on its own
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}