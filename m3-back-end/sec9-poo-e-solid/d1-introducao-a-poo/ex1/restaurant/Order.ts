import Client from './Client';
import Item from './Item';

type TPaymentMethod = 'cartão' | 'dinheiro' | 'pix';

export default class Order {
  private _client: Client;
  private _consumedItems: Item[];
  private _paymentMethod: TPaymentMethod;
  private _discount: number;

  constructor(
    client: Client,
    paymentMethod: TPaymentMethod,
    discount: number
  ) {
    this._client = client;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  
  get client(): Client {
    return this._client
  }

  set client(newValue: Client) {
    this._client = newValue
  }

  get consumedItems(): Item[] {
    return this._consumedItems
  }

  set consumedItems(newValue: Item[]) {
    if (newValue.length === 0) {
      throw new Error("Order should have at least 1 item");
    }

    this._consumedItems = newValue
  }

  get paymentMethod(): TPaymentMethod {
    return this._paymentMethod
  }

  set paymentMethod(newValue: TPaymentMethod) {
    this._paymentMethod = newValue
  }

  get discount(): number {
    return this._discount
  }

  set discount(newValue: number) {
    if (newValue === 0) {
      throw new Error("Discount must be greater than 0");
    }

    this._discount = newValue
  }

  public calculateTotal(): number {
    const total = this._consumedItems.reduce(
      (acc: number, item: Item) => acc + item.price, 0
    );

    return total;
  }

  public calculateTotalWithDiscount():number {
    const total = this.calculateTotal()
    return total + (total * this._discount)
  }
}
