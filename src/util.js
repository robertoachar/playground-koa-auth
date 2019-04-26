/* eslint import/prefer-default-export: 0 */

const checkString = (value, message) => {
  if (typeof value !== 'string') {
    throw new Error(message);
  }

  if (value.trim() === '') {
    throw new Error(message);
  }

  return true;
};

export { checkString };
