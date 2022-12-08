const _apples = ['🍎', '🍎', '🍎', '🍎', '🍎', '🍎', '🍎'];

function chunkApples(apples, quantity) {
  const foodQuantity = apples.length;
  if (quantity <= foodQuantity) {
    const tablesNB = Math.trunc(foodQuantity / quantity);
    const leftApple = new Array(foodQuantity % quantity).fill('🍎');
    const tablesNb = new Array(tablesNB).fill(new Array(quantity).fill('🍎'));
    const result = tablesNb.concat(leftApple);
    return result;
  }
}

console.log(chunkApples(_apples, 3));

function chunkApples_2(apples, quantity) {
  let copy = [...apples];
  return copy.reduceRight((array) => {
    array.push(copy.splice(0, quantity));
    return array;
  }, []);
}

function chunkApples_3(apples, quantity) {
  // Initialize the result array
  let result = [];

  // Loop through the input array and create sub-arrays of the specified size
  for (let i = 0; i < apples.length; i += quantity) {
    result.push(apples.slice(i, i + quantity));
  }

  // Return the result array
  return result;
}
