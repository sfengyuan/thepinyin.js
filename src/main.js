import { dict } from './_dict'

const pinyinjs = {
  'DEFAULT': 'DEFAULT',
  'INITIAL': 'INITIAL',
  'NUMBER': 'NUMBER',
  'NOMARK': 'NOMARK',
  'VOWELS': {
    'ā': 'a1',
    'á': 'a2',
    'ǎ': 'a3',
    'à': 'a4',
    'ē': 'e1',
    'é': 'e2',
    'ě': 'e3',
    'è': 'e4',
    'ī': 'i1',
    'í': 'i2',
    'ǐ': 'i3',
    'ì': 'i4',
    'ō': 'o1',
    'ó': 'o2',
    'ǒ': 'o3',
    'ò': 'o4',
    'ū': 'u1',
    'ú': 'u2',
    'ǔ': 'u3',
    'ù': 'u4',
    'ǖ': 'u1',
    'ǘ': 'u2',
    'ǚ': 'u3',
    'ǜ': 'u4'
  }
}

pinyinjs.py = function (str, style, rule) {
  style = !style ? pinyinjs.DEFAULT : style
  rule = !rule ? pinyinjs.DEFAULT : rule
  let pinyin = str.split('').map(char => dict[char]).filter(py => !!py)
  if (pinyin.length === 0 || (rule === pinyinjs.DEFAULT && style === pinyinjs.DEFAULT)) {
    return pinyin
  }
  return transform(pinyin, style, rule)
}

pinyinjs.isMulti = function (char) {
  if (char.length > 1) {
    return false
  }
  return Array.isArray(dict[char])
}
function replaceVowels (char, style) {
  let tone
  char = char.split('').map(letter => {
    let v = pinyinjs['VOWELS'][letter]
    if (v) {
      tone = v[1]
      return v[0]
    } else {
      return letter
    }
  }).join('')
  if (style === pinyinjs.NUMBER) {
    char += tone
  }
  return char
}

function transform (pinyin, style, rule) {
  return pinyin.map(char => {
    if (Array.isArray(char)) {
      return transform(char, style, rule)
    }
    if (rule === pinyinjs.INITIAL) {
      return char[0]
    }
    return replaceVowels(char, style)
  })
}

export default pinyinjs
