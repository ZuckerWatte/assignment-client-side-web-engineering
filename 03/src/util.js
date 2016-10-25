export function uuid() {
  /* eslint-disable no-bitwise */
  let i, random,
    uid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uid += '-';
    }

    if (i === 12) {
      uid += 4;
      uid.toString(16);
    }
    else {
      uid += (i === 16 ? random & 3 | 8 : random).toString(16);
    }

    // uid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }

  return uid;
}

export function pluralize(count, word) {
  return count === 1 ? word : `${word}s`;
}

export function store(namespace, data) {
  if (arguments.length > 1) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }
  const item = localStorage.getItem(namespace);
  return item && JSON.parse(item) || [];
}
