# archive-type [![Build Status](https://travis-ci.org/kevva/archive-type.svg?branch=master)](https://travis-ci.org/kevva/archive-type)

> Detect the archive type of a Buffer/Uint8Array


## Install

```bash
$ npm install --save archive-type
```

```bash
$ component install kevva/archive-type
```

```bash
$ bower install --save archive-type
```


## Usage

```js
var archiveType = require('archive-type');
var fs = require('fs');
var buf = fs.readFileSync('foo.zip');

archiveType(buf);
// => zip
```


## API

### archiveType(buf)

Returns [`7z`](https://github.com/kevva/is-7zip), [`bz2`](https://github.com/kevva/is-bzip2), [`gz`](https://github.com/kevva/is-gzip), [`rar`](https://github.com/kevva/is-rar), [`tar`](https://github.com/kevva/is-tar), [`zip`](https://github.com/kevva/is-zip) or `false`.

#### buf

Type: `buffer` *(Node.js)*, `uint8array`


## CLI

```bash
$ npm install --global archive-type
```

```bash
$ archive-type --help

Usage
  $ cat <file> | archive-type

Example
  $ cat foo.tar.gz | archive-type
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)