export async function getInstance(port, app, id) {
    const url = `http://localhost:${port}/api/${app}/${id}/`;
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();

        return data[app];

        } else {
            console.error(response);
          }
    }


  export async function getInstances(port, app) {
        const response = await fetch(`http://localhost:${port}/api/${app}/`);

        if (response.ok) {
          const data = await response.json();
          return data[app];
        } else {
          console.error(response);
        }

      }

export async function createInstance(port, app, data) {

    const body = JSON.stringify(data);

    const url = `http://localhost:${port}/api/${app}/`;
    const fetchConfig = {
        method: 'post',
        body: body,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, fetchConfig);

    return response;

    }
