const {Calculator} = require('./calculator')

describe('Adding Numbers' , () =>{
    test('adds 2 + 1 equal 3', () =>
    expect(Calculator.add(2,1)).toBe(3))
});
describe('Adding Numbers' , () =>{
    test('adds 10 + 10 equal 20', () =>
    expect(Calculator.add(10,10)).toBe(20))
});
describe('Adding Numbers' , () =>{
    test('adds 44 + 55 equal 99', () =>
    expect(Calculator.add(44,55)).toBe(99))
});

describe('Subtract Numbers' , () =>{
    test('adds 10 - 5  equal 5', () =>
    expect(Calculator.subtract(10,5)).toBe(5))
});

describe('Subtract Numbers' , () =>{
    test('adds 100 - 100 equal 0', () =>
    expect(Calculator.subtract(100,100)).toBe(0))
});

describe('Subtract Numbers' , () =>{
    test('Subtract 789456123 + 123456789 equal 665,999,334', () =>
    expect(Calculator.subtract(789456123,123456789)).toBe(665999334))
});


describe('divide Numbers' , () =>{
    test('divide 10 / 10  equal 1', () =>
    expect(Calculator.divide(10,10)).toBe(1))
});

describe('divide Numbers' , () =>{
    test('divide 20 / 2  equal 10', () =>
    expect(Calculator.divide(20,2)).toBe(10))
});

describe('divide Numbers' , () =>{
    test('divide 100 / 20  equal 5', () =>
    expect(Calculator.divide(100,20)).toBe(5))
});


describe('Multiply Numbers' , () =>{
    test('multiply 2 * 2   equal 4', () =>
    expect(Calculator.multiply(2,2)).toBe(4))
});

describe('Multiply Numbers' , () =>{
    test('multiply 10 * 10  equal 100', () =>
    expect(Calculator.multiply(10,10)).toBe(100))
});

describe('Multiply Numbers' , () =>{
    test('multiply 5 * 5  equal 25', () =>
    expect(Calculator.multiply(5,5)).toBe(25))
});
