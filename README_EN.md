# thePinyin.js

[![codecov](https://codecov.io/gh/sfengyuan/thepinyin.js/branch/master/graph/badge.svg)](https://codecov.io/gh/sfengyuan/thepinyin.js)
[![codebeat badge](https://codebeat.co/badges/2ac8c218-6509-45b9-8078-2de3d5e75945)](https://codebeat.co/projects/github-com-sfengyuan-thepinyin-js-master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文文档](https://github.com/sfengyuan/thepinyin.js/blob/master/README.md)

Based on the dictionary of pinyin4js, include 46 "异体字",
Those are Korean Hanzi, Japanese Hanzi and compound Hanzi, e.g. '兛': 'qiānkè', they have standard pinyin, they just not used nowdays.

To Korean Hanzi, Japanese Hanzi, the common pinyin will be used.

Does't support word-cut, since we have to mind the size of the files in web, and the result of word-cut is not accurate, so that is not a good deal.

## Install

NPM
`npm install thepinyin.js`

web
`<script src="https://unpkg.com/thepinyin.js@1.0.5/dist/umd/main.js"></script>`


## Usage

```
import pinyinjs from 'thepinyin.js'
// or

const pinyinjs = require('thepinyin.js')

// or scripts


pinyinjs.py('texts 123') // []

pinyinjs.py('一二三') // ['yī', 'èr', 'sān']

pinyinjs.py('写中文', pinyinjs.DEFAULT, pinyinjs.INITIAL)
// ['x', ['z', 'z'], 'w']

pinyinjs.py('写中文', pinyinjs.NOMARK)
// ['xie', ['zhong', 'zhong'], 'wen']

pinyinjs.py('写中文', pinyinjs.NUMBER)
// ['xie3', ['zhong1', 'zhong4'], 'wen2']

pinyinjs.isMulti('中') // true
```

# api

There are only two methods, `py` to tranform, `isMulti` to check if a character has multi-pronunciation.


### pinyinjs.py(str, style, rule)

str: any string

style: constant: pinyinjs.DEFAULT, pinyinjs.NUMBER, pinyinjs.NOMARK

rule: constant: pinyinjs.DEFAULT, pinyinjs.INITIAL

Return value: An array of string, for multi-pronunciation characters, a sub array will be returned

#### pinyinjs.DEFAULT

Default pinyin with tone marks

#### pinyinjs.NUMBER

Number as tone marks

#### pinyinjs.NOMARK

No tone marks

#### pinyinjs.INITIAL

Only initials

### pinyinjs.isMulti(str)

str: **single** character

Return value: true, false

# License

MIT
