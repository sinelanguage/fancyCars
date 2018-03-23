// Fetch API does not handle http errors on its own
export default function handleHttpErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
