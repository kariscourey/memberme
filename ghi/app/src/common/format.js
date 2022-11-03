// derived from https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript
export const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

// derived from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
export const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// derived from https://www.geeksforgeeks.org/python-program-to-convert-camel-case-string-to-snake-case/
export const toSnake = (str) => {

  let res = [str[0].toLowerCase()];

  for (let c of str.slice(1)) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c)) {
      res.push('_');
      res.push(c.toLowerCase());
    } else {
      res.push(c);
    }
  }
  return res.join('');
}


export const camelToUserFriendly = (str) => {

  let res = [str[0].toLowerCase()];

  for (let c of str.slice(1)) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c)) {
      res.push(' ');
      res.push(c.toLowerCase());
    } else {
      res.push(c);
    }
  }
  return res.join('');
}
