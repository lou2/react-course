const add = (a, b) => a+b;
const generateGreeting = (name) =>`Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3,4);

  expect(result).toBe(7);
});

test('should show greeting', () => {
  const greeting = generateGreeting('dude');
  expect(greeting).toBe('Hello dude!');
});
