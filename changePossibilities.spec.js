describe('changePossibilities', () => {
  it('returns 0 if no combinations are possible', () => {
    expect(changePossibilities(9, [5])).toEqual(0);
    expect(changePossibilities(7, [2, 4])).toEqual(0);
  });

  it('returns the correct number of possibilities', () => {
    expect(changePossibilities(4, [1, 2, 3])).toEqual(4);
    expect(changePossibilities(6, [1, 5])).toEqual(2);
    expect(changePossibilities(25, [1, 5, 10, 25])).toEqual(13);
  });
});
