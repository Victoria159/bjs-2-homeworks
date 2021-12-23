function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every(function(value, index) {
    return value === arr2[index]
  })
  return result
}

function advancedFilter(arr) {
 let result = arr.filter(function(number) {
    return number > 0
  }).filter(n => !(n % 3)).map(function(num) {
    return num * 10
  })
    return result;
}
