import SERVER_URL from "../constants/server-url";

export default function getDummyUsers() {
  return fetch(`${SERVER_URL}/users`)
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
