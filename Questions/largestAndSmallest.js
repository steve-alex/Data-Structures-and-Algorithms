const largestAndSmallest = (arr) => {
  largest = arr[0];
  smallest = arr[0];

  for (const item of arr){
    console.log("Item: ", item);
    if (item < smallest){
      console.log("item < smallest", item < smallest)
      smallest = item;
    } else if (item > largest){
      console.log("item > largest", item > largest)
      largest = item
    }
  }

  console.log("Largest: ", largest)
  console.log("Smallest: ", smallest)
}

largestAndSmallest([1, 3, -56, 345, 3, 5])
