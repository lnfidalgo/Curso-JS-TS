import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('shoul have properties name and price', () => {
    const sut = createSut('VGA', 1500);
    expect(sut).toHaveProperty('name', 'VGA');
    expect(sut.price).toBeCloseTo(1500);
  });
});
