import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustumer', () => {
  it('should have firstName, lastName, cpf ', () => {
    const sut = createIndividualCustomer('Lucas', 'Fidalgo', '400.289.22');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Fidalgo');
    expect(sut).toHaveProperty('cpf', '400.289.22');
  });

  it('should have methods get name and idn for IndividualCustomer', () => {
    const sut = createIndividualCustomer('Lucas', 'Fidalgo', '400.289.22');
    expect(sut.getName()).toBe('Lucas Fidalgo');
    expect(sut.getIDN()).toBe('400.289.22');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj ', () => {
    const sut = createEnterpriseCustomer('Cambotas', '4002.8922');
    expect(sut).toHaveProperty('name', 'Cambotas');
    expect(sut).toHaveProperty('cnpj', '4002.8922');
  });

  it('should have methods get name and idn for EnterpriseCustomer', () => {
    const sut = createEnterpriseCustomer('Cambotas', '4002.8922');
    expect(sut.getName()).toBe('Cambotas');
    expect(sut.getIDN()).toBe('4002.8922');
  });
});
