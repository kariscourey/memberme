// get (list) call to randomuser
export async function getRandomUsers() {

    // fetch response
    const response = await fetch(`https://randomuser.me/api/?results=12`);

    // if ok
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    // otherwise
    else {
        console.error(response);
    }

}


// prevent default callback
export function preventDefault(callback, selector) {
    selector = selector || (x => x);
    return event => {
        event.preventDefault();
        callback(selector(event));
    };
}
