import SERVER_URL from "../constants/server-url";

export default function getDummyUsers() {
  return fetch(`${SERVER_URL}/users`)
    .then(res => res.json())
    .catch(err =>
      console.error(`Users data not found due to the following error: ${err}`)
    );
}
