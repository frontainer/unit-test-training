import validate from '../validate'

test('defined', () => {
  expect(validate).toBeDefined();
});
test('empty', () => {
  expect(validate()).toStrictEqual({
    error: false,
    message: ''
  });
});