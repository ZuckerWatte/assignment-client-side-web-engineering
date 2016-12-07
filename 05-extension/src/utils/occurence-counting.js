export function countOccurences(input) {
  const compressed = [],
    copy = input.slice(0);

  for (let i = 0; i < input.length; i++) {
    let myCount = 0;

    // compare with element in the copy
    for (let w = 0; w < copy.length; w++) {
      if (input[i] === copy[w]) {
        // counter for duplicates
        // set item to undefined afterwards
        myCount += 1;
        delete copy[w];
      }
    }

    // new Object with value & count
    if (myCount > 0) {
      const a = {};
      a.value = input[i];
      a.count = myCount;
      compressed.push(a);
    }
  }
  return compressed;
}


export function sortObject(obj, key) {
  obj.sort(function(a, b) {
    return parseFloat(b[key]) - parseFloat(a[key]);
  });
  return obj;
}
