# archive-type-cli [![Build Status](https://travis-ci.org/kevva/archive-type-cli.svg?branch=master)](https://travis-ci.org/kevva/archive-type-cli)

> Detect the archive type of a file or stdin


## Install

```
$ npm install --global archive-type-cli
```


## Usage

```
$ archive-type --help

  Usage
    $ archive-type <file>
    $ cat <file> | archive-type

  Examples
    $ archive-type foo.zip
    zip
    $ cat foo.tar | archive-type
    tar
```


## Related

- [archive-type](https://github.com/kevva/archive-type) - API for this module
- [file-type-cli](https://github.com/sindresorhus/file-type-cli) - Detect the file type of a file or stdin


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
