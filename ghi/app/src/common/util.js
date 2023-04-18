export async function getRandomUsers() {
  const response = await fetch(`https://randomuser.me/api/?results=12`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error(response);
  }

}


export function preventDefault(callback, selector) {
  selector = selector || (x => x);
  return event => {
      event.preventDefault();
      callback(selector(event));
  };
}
