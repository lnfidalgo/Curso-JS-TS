import { Message } from "./services/message";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { Persistency } from "./services/save-order";
import { ShopingCart } from "./classes/shoping-cart";

const shopingCart = new ShopingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(shopingCart, message, persistency);

shopingCart.addItem(new Product("VGA", 1500));
shopingCart.addItem(new Product("CPU", 1000));
shopingCart.addItem(new Product("RAM", 500));
console.log(shopingCart.items);
console.log(shopingCart.total());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
