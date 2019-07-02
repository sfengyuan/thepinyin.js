/* eslint-disable */
import py from '../src/main'

test('No Hanzi', () => {
  expect(py.py('texts 123')).toEqual([])
})

test('Hanzi', () => {
  expect(py.py('一二三')).toEqual(['yī', 'èr', 'sān'])
})

test('Hanzi and other texts', () => {
  expect(py.py('and 一1二3 三9888')).toEqual(['yī', 'èr', 'sān'])
})

test('Multi-pronunciation', () => {
  expect(py.py('写中文')).toEqual(['xiě', ['zhōng', 'zhòng'], 'wén'])
})

test('Initials', () => {
  expect(py.py('写中文', py.DEFAULT, py.INITIAL)).toEqual(['x', ['z', 'z'], 'w'])
})

test('No tone marks', () => {
  expect(py.py('写中文', py.NOMARK)).toEqual(['xie', ['zhong', 'zhong'], 'wen'])
})

test('Number marks', () => {
  expect(py.py('写中文', py.NUMBER)).toEqual(['xie3', ['zhong1', 'zhong4'], 'wen2'])
})

test('Is Multi-pronunciations', () => {
  expect(py.isMulti('中')).toBeTruthy()
})
test('Is not Multi-pronunciations', () => {
  expect(py.isMulti('文')).toBeFalsy()
})
test('Is not Multi-pronunciations with multi characters', () => {
  expect(py.isMulti('文文')).toBeFalsy()
})
