// https://tech-docs.corndel.com/js/string-formatting.html

/**
 * Formats the amount as a price, with the given currency symbol at the front
 *
 * e.g. (2.5, '$') => '$2.50'
 * e.g. (12.83795, '£') => '£12.84'
 *
 * @param {number} amount - The amount of money
 * @param {string} currency - The currency symbol
 * @returns {string} currency The formatted number
 */
export function formatPrice(amount, currency) {
  // TODO
  // set px two decimal places
  const displayAmnt = amount.toFixed(2)
  // prepend currency 
  const result = currency + displayAmnt
  console.log(result)
  return result


}
