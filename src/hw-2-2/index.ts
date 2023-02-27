import { type Installment, type Product, totalPrice } from './task2.js'
import { normalizeData, posts } from './task3.js'
import { COMMENTS_URL, getData } from './task4.js'

console.log('------- task 2 ------')
const result1 = totalPrice<Product>({ price: 100000, discount: 35 })
console.log('Total Price1: ', result1, ' without installments')
const result2 = totalPrice<Installment>({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log('Total Price2: ', result2.priceAfterDiscount)
console.log('Number of installment months: ', result2.months)
console.log('Monthly payment will be: ', result2.payment)
// 6250

console.log('\n\n------- task 3 ------')
console.log(normalizeData(posts))
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */

console.log('\n\n------- task 4 ------')
getData(COMMENTS_URL)
  .then(data => {
    const printData: string[] = []
    for (const item of data) {
      printData.push(`\nID: ${item.id}, Email: ${item.email}`)
    }
    console.log(...printData)
  }).catch(err => {
    console.error(err)
  })
