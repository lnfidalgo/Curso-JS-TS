import { OrderStatus } from "./interfaces/order-status";
import { Message } from "../services/message";
import { Persistency } from "../services/save-order";
import { ShopingCart } from "./shoping-cart";

export class Order {
         private _orderStatus: OrderStatus = "open";

         constructor(
           private readonly shopingCart: ShopingCart,
           private readonly message: Message,
           private readonly persistency: Persistency
         ) {}

         checkOut(): void {
           if (this.shopingCart.isEmpty()) {
             console.log("Seu carrinho está vazio.");
             return;
           }

           this._orderStatus = "closed";
           this.message.sendMessage(
             `O seu pedido foi recebido, total: ${this.shopingCart.total()}`
           );
           this.persistency.saveOrder();
           this.shopingCart.clear();
         }

         get orderStatus(): OrderStatus {
           return this._orderStatus;
         }
       }
