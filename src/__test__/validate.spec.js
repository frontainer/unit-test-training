import validate from '../validate'

test('defined', () => {
  expect(validate).toBeDefined();
});
test('empty', () => {
  expect(validate()).toBe(false);
});
test('valid value', () => {
  expect(validate('000-0000')).toBe(true);
  expect(validate('111-1111')).toBe(true);
  expect(validate('123-4567')).toBe(true);
  expect(validate('999-0001')).toBe(true);
  expect(validate('010-0010')).toBe(true);
});
test('invalid value', () => {
  expect(validate('-0000000')).toBe(false);
  expect(validate('0-000000')).toBe(false);
  expect(validate('00-00000')).toBe(false);
  expect(validate('0000-000')).toBe(false);
  expect(validate('00000-00')).toBe(false);
  expect(validate('000000-0')).toBe(false);
  expect(validate('0000000-')).toBe(false);
  expect(validate('000--0000')).toBe(false);
  expect(validate('00-000-00')).toBe(false);
  expect(validate('000-0000-')).toBe(false);
  expect(validate('-000-0000')).toBe(false);
  expect(validate('0A0-0000')).toBe(false);
  expect(validate('000-0A00')).toBe(false);
  expect(validate('000=0000')).toBe(false);
  expect(validate('0000000')).toBe(false);
  expect(validate('0x000000-0000')).toBe(false);
  expect(validate('0x000000-0000')).toBe(false);
  expect(validate('0 00-0000')).toBe(false);
  expect(validate('000-00 00')).toBe(false);
  expect(validate('000 - 0000')).toBe(false);
  expect(validate(' 00-0000')).toBe(false);
  expect(validate('000-000 ')).toBe(false);
});
