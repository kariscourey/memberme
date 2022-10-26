// from https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript
export const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};
