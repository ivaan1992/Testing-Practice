const {capitalize} = require('./capitalize');

describe('Capitalize Text', () =>{
    test('Change (ivan) to (Ivan)', () => 
    expect(capitalize('ivan')).toBe('Ivan'))
});