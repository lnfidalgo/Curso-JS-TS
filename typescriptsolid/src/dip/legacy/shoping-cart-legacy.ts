type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = "open" | "closed";

export class ShopingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso :)");
  }

  clear(): void {
    this._items.length = 0;
    console.log("Seu carrinho foi limpo.");
  }

  checkOut(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio.");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(`O seu pedido foi recebido, total: ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shopingCart = new ShopingCart();
shopingCart.addItem({ name: "VGA", price: 1500 });
shopingCart.addItem({ name: "CPU", price: 1000 });
shopingCart.addItem({ name: "RAM", price: 500 });
console.log(shopingCart.items);
console.log(shopingCart.total());
console.log(shopingCart.orderStatus);
shopingCart.checkOut();
console.log(shopingCart.orderStatus);
