import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const product1 = createCartItem('VGA', 1500);
  const product2 = createCartItem('RAM', 500);
  sut.addItem(product1);
  sut.addItem(product2);
  return { sut, discountMock };
};

afterEach(() => jest.clearAllMocks());

describe('Shopping Cart', () => {
  it('should be an empty cart', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should add and remove cart item', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(1);
    sut.addItem(createCartItem('CPU', 1500));
    sut.removeItem(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBeCloseTo(2000);
    expect(sut.totalWithDicount()).toBeCloseTo(2000);
  });

  it('should clear all cart items', () => {
    const { sut } = createSutWithProducts();
    sut.clear();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
