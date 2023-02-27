export interface Product {
  price: number
  discount: number
}

export interface Installment extends Product {
  isInstallment: boolean
  months: number
}

export interface InstallmentPayment {
  priceAfterDiscount: number
  payment: number
  months: number
}

type CalculateResultOutput<T> = T extends Installment
  ? InstallmentPayment
  : number

export function totalPrice<T extends Product | Installment>(product: T): CalculateResultOutput<T> {
  const discountMultiplier = 1 - product.discount / 100
  const priceAfterDiscount = product.price * discountMultiplier

  if (
    'isInstallment' in product &&
    'months' in product &&
    product.discount >= 0 &&
    product.discount <= 100 &&
    product.months > 0
  ) {
    const months = product.months
    const payment = priceAfterDiscount / months
    const result: InstallmentPayment = { priceAfterDiscount, payment, months }
    return result as CalculateResultOutput<T>
  } else {
    return priceAfterDiscount as CalculateResultOutput<T>
  }
}
