// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import {validator, maskify} from '../src/validator';

describe('validator', () => {
  it('debería ser un function', () => {
    expect(typeof validator).toBe('function');
  });

  describe('validator', () => {
    it('debería ser una función', () => {
      expect(typeof validator).toBe('function');
    });

    it('debería retornar true para "6011000990139424"', () => {
      expect(validator('6011000990139424')).toBe(true);
    });

    it('debería retornar true para "5555555555554444"', () => {
      expect(validator('5555555555554444')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator('1234567890')).toBe(false);
    });
  });

  describe('maskify', () => {
    it('debería ser una función', () => {
      expect(typeof maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(maskify('helloworld')).toBe('######orld');
    });
  });
});
