const {cualEsMayor} = require('');
describe('El mayor de tres numeros', () => {
    test('El mayor de 3, 5 y 7 es 7', () => {
        expect(cualEsMayor(3, 5, 7)).toBe(7);
    });
    test('El mayor de 10, 5 y 7 es 10', () => {
        expect(cualEsMayor(10, 5, 7)).toBe(10);
    });
    test('El mayor de 3, 5 y 2 es 5', () => {
        expect(cualEsMayor(3, 5, 2)).toBe(5);
    });
    test('El mayor de 3, 3 y 3 es 3', () => {
        expect(cualEsMayor(3, 3, 3)).toBe(3);
    });
    test('El mayor de 0, 0 y 0 es 0', () => {
        expect(cualEsMayor(0, 0, 0)).toBe(0);
    });
    test('El mayor de -1, -3 y -2 es -1', () => {
        expect(cualEsMayor(-1, -3, -2)).toBe(-1);
    });
});