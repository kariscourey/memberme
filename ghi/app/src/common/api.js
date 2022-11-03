import { toCamel } from '../common/format';

export async function updateInstance(port, app, url_field, data) {
    const body = JSON.stringify(data);

    const url = `http://localhost:${port}/api/${app}/${url_field}/`;

    const fetchConfig = {
        method: 'put',
        body: body,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, fetchConfig);

    return response;
}

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

    export async function getDeepInstances(port, app) {
        const response = await fetch(`http://localhost:${port}/api/${app}/`);

        if (response.ok) {
          const data = await response.json();
          return data[app.split("/")[0]];
        } else {
          console.error(response);
        }

      }

  export async function getFilteredInstances(port, app, parameter, value) {
        const response = await fetch(`http://localhost:${port}/api/${app}/`);

        if (response.ok) {
          let data = await response.json();
          data[app] = data[app].filter(item => item[parameter] == value)
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


export async function getInstancesFromManyRequests(urls) {
    const requests = urls.map(url => fetch(url));
    const responses = await Promise.all(requests);

    const obj = {};

    responses.map(async response => {
      let data = await response.json();
      let obj_key = Object.keys(data)[0];

      if (obj_key.includes("_")) {
        obj_key = toCamel(obj_key);
      }

      let obj_value = Object.values(data)[0];
      obj[obj_key] = obj_value;
    })

    return obj;

}
