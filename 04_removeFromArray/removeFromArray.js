const removeFromArray = function (arr, ...element) {
  // loop over the array and remove the element/s that was on the argument
  for (let el of element) {
    let index = arr.findIndex((value) => el === value)
    if (index < 0) {
      continue
    } else {
      arr.splice(index, 1)
    }
  }
  return arr
}

// Do not edit below this line
module.exports = removeFromArray
