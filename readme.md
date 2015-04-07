# nested-prop [![Build Status](https://travis-ci.org/floatdrop/nested-prop.svg?branch=master)](https://travis-ci.org/floatdrop/nested-prop)

Get and set nested properties.


## Install

```
$ npm install --save nested-prop
```


## Usage

```js
var nestedProp = require('nested-prop');

var obj = {a: ''};

nestedProp.set(obj, 'a.b.c', 1);
//=> {a: {b: {c: 1}}}

nestedProp.get(obj, 'a.b.c');
//=> 1
```


## API

### nestedProp.get(object, path)

Gets property from object by path.

### nestedProp.set(object, path, value)

Sets value to property by path. If some properties is not assignable Objects (like `string`) - they will be overwritten.

## License

MIT © [Vsevolod Strukchinsky](http://github.yandex-team.ru/floatdrop)
