# read-pkg-json
> Read package.json file.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/read-pkg-json
```

## usage
```js
import readPkgJson from '@jswork/read-pkg-json';

// 1. current dir
const pkg = readPkgJson();
// 2. specify dir
const pkg = readPkgJson('path/to/your/project');
```

## types
```ts
/// <reference types="@jswork/read-pkg-json/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/read-pkg-json/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/read-pkg-json
[version-url]: https://npmjs.org/package/@jswork/read-pkg-json

[license-image]: https://img.shields.io/npm/l/@jswork/read-pkg-json
[license-url]: https://github.com/afeiship/read-pkg-json/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/read-pkg-json
[size-url]: https://github.com/afeiship/read-pkg-json/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/read-pkg-json
[download-url]: https://www.npmjs.com/package/@jswork/read-pkg-json
