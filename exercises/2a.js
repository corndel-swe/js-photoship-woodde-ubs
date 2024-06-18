// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */
export function arrayRotate(arr) {
// TODO
// put the last element to the front
  const lastArr = arr.pop()
  arr.unshift(lastArr)
  return arr

console.log(arr)
}

const testArray = ['a', 'b', 'c']
const result = arrayRotate(testArray)