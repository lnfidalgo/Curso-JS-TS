export class Cart {
  private readonly products: Product[] = []

  insertProducts(...receivedProduct: Product[]): void {
    for (const product of receivedProduct) {
      this.products.push(product)
    }
  }

  cartItens(): number {
    return this.products.length
  }

  cartValue(): number {
    return this.products.reduce((ac, cv) => ac + cv.price, 0)
  }

}

export class Product {
  constructor (protected name: string, public price: number) {}
}

const product1 = new Product('Caneta', 10)
const product2 = new Product('Lápis', 10)
const product3 = new Product('Borracha', 10)
const carrinho = new Cart()

carrinho.insertProducts(product1, product2, product3)
console.log(carrinho)
console.log(carrinho.cartValue())
