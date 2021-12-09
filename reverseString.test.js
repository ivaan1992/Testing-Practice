const{ reverseString} = require('./reverseString')
describe('Reverse String unit test', () => {
    test('Reverse String - part 1', () => {
      expect(reverseString('abcdef')).toBe('fedcba');
    });
  });