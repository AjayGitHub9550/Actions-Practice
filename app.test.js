const { add } = require('./app');

test ('adds 2 + 3 to equal 5', () => {
       expect(add(2, 3)).toBe(5);
});

test('adds 10 + 20 to equal 30', () => {

    expect(add(10, 20)).toBe(30);
});