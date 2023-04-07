import { ShopingCart } from "./classes/shoping-cart";
import { Order } from "./classes/order";
import { Message } from "./services/message";
import { Persistency } from "./services/save-order";
import { Product } from "./classes/product";
import { NoDiscount } from "./classes/discount";

const noDiscount = new NoDiscount();
const shoppingCart = new ShopingCart(noDiscount);
const messaging = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("VGA", 1500));
shoppingCart.addItem(new Product("CPU", 1000));
shoppingCart.addItem(new Product("RAM", 500));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
