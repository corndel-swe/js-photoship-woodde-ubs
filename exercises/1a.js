// Read https://tech-docs.corndel.com/js/arrays.html first!

/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(nums) {
  // TODO
  // define the array of numbers --> called nums
  // get the first value
const firstValue = nums[0]
  // get last value
 // const lastValue = nums[4]
 const lastValue = nums[nums.length - 1]
  // add first and last value
  const result = firstValue + lastValue
  // return the result
  console.log(result)
  return result
}

let testArray = [4, 1, 9, 5, 2, 6]
let result = firstAddLast(testArray)
console.log(result)