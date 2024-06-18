// https://tech-docs.corndel.com/js/array-map.html

/**
 * An array of numbers representing filesize in KB is passed in.
 * The filesizes should be converted to MB.
 * Assume that 1MB = 1000KB.
 *
 * e.g. [1400, 500, 2100] => [1.4, 0.5, 2.1]
 *
 * @param {number[]} arr - An array of KB
 * @returns {Array} The array in MB
 */
export function convertFilesizes(arr) {
  // TODO
  //replace 1400
  //replace 500
  //replace 2100
  return arr.map(x => x / 1000)

  console.log(arr)
}

const testArray = ['1400', '500', '2100']
const result = convertFilesizes(testArray)
console.log(result)
