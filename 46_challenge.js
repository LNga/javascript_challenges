const numbers = [190, 5, 4200, 2, 776];

function isArraySubset(parentArray, childArray) {
  return childArray.every((childValue) => parentArray.includes(childValue));
}
