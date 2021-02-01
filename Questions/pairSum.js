const pairSum = (arr, total) => {
  const seenValues = {};
  const pairs = [];

  for (const item in arr){
    let pair = total - item;
    if (seenValues[pair]){
      pairs.push([item, pair]);
    } else {
      seenValues[item] = true;
    }
  }

  console.log("Pairs: ", pairs)
  return pairs
}

pairSum([1, 1, 5], 2)
