import { type Installment, type Product, totalPrice } from './task2.js'

console.log('------- task 2 ------')
const result1 = totalPrice<Product>({ price: 100000, discount: 35 })
console.log('Total Price1: ', result1, ' without installments')
const result2 = totalPrice<Installment>({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log('Total Price2: ', result2.priceAfterDiscount)
console.log('Number of installment months: ', result2.months)
console.log('Monthly payment will be: ', result2.payment)
// 6250
