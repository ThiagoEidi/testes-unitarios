const operation = require('./operations');

test('Soma de 2 números', () => {
    expect(operation(2, 3, '+')).toBe(5);
});

test('Subtração de 2 números', () => {
    expect(operation(10, 4, '-')).toBe(6);
});

test('Multiplicação de 2 números', () => {
    expect(operation(3, 5, '*')).toBe(15);
});

test('Divisão de 2 números', () => {
    expect(operation(8, 2, '/')).toBe(4);
});

test('Divisão por zero deve lançar erro', () => {
    expect(() => operation(8, 0, '/')).toThrow('Divisão por zero não é permitida!');
});


