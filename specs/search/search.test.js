// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  // code goes here
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return array[i];
    }
  }
  return void 0;
}

function binarySearchRecursive(id, array) {
  if (array.length === 0) return null;
  // code goes here

  const mid = Math.floor(array.length / 2);
  const current = array[mid];

  if (id === current.id) return current;

  if (id > current.id) {
    const rightArray = array.slice(mid);
    return binarySearch(id, rightArray);
  } else {
    const leftArray = array.slice(0, mid);
    return binarySearch(id, leftArray);
  }
}

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let midElement;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    midElement = array[index];

    if (id > midElement.id) {
      min = index + 1;
    } else if (id < midElement.id) {
      max = index - 1;
    } else {
      return midElement;
    }
  }

  return void 0;
}

// unit tests
// do not modify the below code
test("linear search", function () {
  const lookingFor = { id: 5, name: "Brian" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sam" },
      { id: 11, name: "Sarah" },
      { id: 21, name: "John" },
      { id: 10, name: "Burke" },
      { id: 13, name: "Simona" },
      { id: 31, name: "Asim" },
      { id: 6, name: "Niki" },
      { id: 19, name: "Aysegul" },
      { id: 25, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 2, name: "Marc" },
      { id: 51, name: "Chris" },
      lookingFor,
      { id: 14, name: "Ben" },
    ])
  ).toBe(lookingFor);
});

test("binary search", function () {
  const lookingFor = { id: 23, name: "Brian" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      { id: 5, name: "John" },
      { id: 6, name: "Burke" },
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      lookingFor,
      { id: 24, name: "Ben" },
    ])
  ).toBe(lookingFor);
});
