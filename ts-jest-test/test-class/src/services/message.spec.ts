import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Message', () => {
  afterEach(() => jest.clearAllMocks());

  it('shoul return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('shoul call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('shoul call console.log with "Pedido salvo com sucesso :)"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Mensagem enviada com sucesso: ',
      'test',
    );
  });
});
