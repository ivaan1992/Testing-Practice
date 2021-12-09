const { stringLength } = require('./stringLength');

describe('String length unit test', () => {
    test('String length normal test', () => {
        expect(stringLength('123')).toBe(3);
        expect(stringLength('helloworld')).toBe(10);
        expect(stringLength('Hi there, Im Ivan and Im from Mexico')).toBe('string too long')
    });
});

describe('String length unit test part 2', () =>{
    test('String length exceptions', () => {
        expect(stringLength('')).toBe('string too short');
    });
});