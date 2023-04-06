import { Message } from "./services/message";
import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { SaveOrder } from "./services/save-order";
import { ShopingCart } from "./entities/shoping-cart";

const shopingCart = new ShopingCart();
const message = new Message();
const saveOrder = new SaveOrder();
const order = new Order(shopingCart, message, saveOrder);

shopingCart.addItem(new Product("VGA", 1500));
shopingCart.addItem(new Product("CPU", 1000));
shopingCart.addItem(new Product("RAM", 500));
console.log(shopingCart.items);
console.log(shopingCart.total());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
