describe('decodeString', () => {
  it('correctly handles a string with no numbers or brackets', () => {
    expect(decodeString('abcd')).toEqual('abcd');
  });

  it('correctly decodes a string', () => {
    expect(decodeString('4[ab]')).toEqual('abababab');
    expect(decodeString('2[b3[a]]')).toEqual('baaabaaa');
  });
});
