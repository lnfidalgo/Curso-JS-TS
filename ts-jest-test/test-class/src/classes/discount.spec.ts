import {
  Discount,
  NoDiscount,
  TenPercentDiscount,
  FiftyPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(1500)).toBeCloseTo(1500);
  });
  it('should apply 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(1500)).toBeCloseTo(750);
  });
  it('should apply 10% discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(1500)).toBeCloseTo(1350);
  });
});
