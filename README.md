# thePinyin.js

[![codecov](https://codecov.io/gh/sfengyuan/thepinyin.js/branch/master/graph/badge.svg)](https://codecov.io/gh/sfengyuan/thepinyin.js)
[![codebeat badge](https://codebeat.co/badges/2ac8c218-6509-45b9-8078-2de3d5e75945)](https://codebeat.co/projects/github-com-sfengyuan-thepinyin-js-master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


[EN README](https://github.com/sfengyuan/thepinyin.js/blob/master/README_EN.md)

基于pinyin4js的词库, 覆盖了46个"异体字", 这些字大部分是韩国汉字, 和制汉字, 和合成字如'兛': 'qiānkè', 它是有标准读音的, 只是这个字不再使用了.

对于韩国汉字, 和制汉字使用约定俗成的拼音.

不支持分词, 因web使用需要考虑体积问题, 而准确率无法保证, 故不划算.


## 安装:

Node.js
`npm install thepinyin.js`

web
`<script src="https://unpkg.com/thepinyin.js@1.0.5/dist/umd/main.js"></script>`

## 使用

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

本库只有2个方法 `py`转换, `isMulti` 用于判断一个汉字是否是`多音字`.

### pinyinjs.py(str, style, rule)

str: 任意字符

style: 常量, pinyinjs.DEFAULT, pinyinjs.NUMBER, pinyinjs.NOMARK

rule: 常量, pinyinjs.DEFAULT, pinyinjs.INITIAL

返回值: 字符串数组, 对于多音字返回子数组

#### pinyinjs.DEFAULT

默认带声调的拼音

#### pinyinjs.NUMBER

数字声调

#### pinyinjs.NOMARK

无声调

#### pinyinjs.INITIAL

只保留首字母

### pinyinjs.isMulti(str)

str: **一**个字符

返回值: true, false

# 许可证

MIT
