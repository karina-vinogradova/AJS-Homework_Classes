import Character from '../character';

test.each([
  [() => new Character('C'), 'Incorrect name'],
  [() => new Character(1234), 'Incorrect name'],
  [() => new Character('Very long name for character'), 'Incorrect name'],
])('testing length of name', (name, expected) => {
  expect(name).toThrow(expected);
});

test('testing name of Character === string', () => {
  const calvin = new Character('Calvin');
  expect(calvin.name).toBe('Calvin');
});
