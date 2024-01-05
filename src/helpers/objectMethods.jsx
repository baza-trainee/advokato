export const isObjectEmpty = obj => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }

  return false;
};
