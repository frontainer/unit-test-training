import * as index from '../index'

test('index.isValidPostalCode', () => {
  expect(index.isValidPostalCode('000-0000')).toBe(true)
});

test('index.isValidPhoneNumber', () => {
  expect(index.isValidPhoneNumber('090-0000-0000')).toBe(true)
});

test('index.findAndIndex', () => {
  const list = [
    {
      id: 1,
      value: 'test01'
    },
    {
      id: 2,
      value: 'test02'
    },
    {
      id: 3,
      value: 'test03'
    }
  ]
  expect(index.findAndIndex(list, 'id', 4)).toBe(null)
  expect(index.findAndIndex(list, 'id', 2)).toStrictEqual({
    index: 1,
    value: {
      id: 2,
      value: 'test02'
    }
  })
});

test('index.removeHyphen', () => {
  expect(index.removeHyphen('123-4567')).toBe('1234567')
})

test('index.trimSpace', () => {
  expect(index.trimSpace('1234 5678')).toBe('1234 5678')
  expect(index.trimSpace(' 1234 5678 ')).toBe('1234 5678')
})

test('index.swap', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(index.swap(arr, 2, 3)).toStrictEqual([1, 2, 4, 3, 5])
})

test('index.reorder', () => {
  let arr = [1, 2, 3, 4, 5]
  expect(index.reorder(arr, 2, 4)).toStrictEqual([1, 2, 4, 5, 3])
})