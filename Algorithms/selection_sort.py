def selection_sort(arr):
  newArray = []

  for i in range(len(arr)):
    smallest = find_smallest(arr)
    newArray.append(arr.pop(smallest))
  
  return newArray


def find_smallest(arr):
  smallest = arr[0]
  smallest_index = 0

  for i, item in enumerate(arr):
    if item < smallest:
      smallest = item
      smallest_index = i
  
  return smallest_index

print(selection_sort([5, 3, 6, 77, 1, 55, 4, 66, 2, 10]))