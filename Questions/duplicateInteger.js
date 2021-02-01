const findDuplicate = (arr) => {
  let numbersFound = {};

  for (let item of arr){
    if (numbersFound[item]){
      numbersFound[item] += 1
    } else {
      numbersFound[item] = 1
    }
  }

  let duplicate = [];

  for (let key in numbersFound){
    if (numbersFound[key] > 1){
      duplicate.push(key)
    }
  }

  console.log("Duplicates: ", duplicate)
}

findDuplicate([1, 3, 5, 5, 3, 7, 7, 1, 4, 5, 6, 123, 123])