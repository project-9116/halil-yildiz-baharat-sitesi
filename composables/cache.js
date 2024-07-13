const cache = new Map();

export const getCachedImage = (key) => {
  if (cache.has(key)) {
    return cache.get(key);
  }
  return null;
};

export const setCachedImage = (key, value) => {
  cache.set(key, value);
};
