# eslint-config-billogram

> Billogram ESLint configurations

[![npm version](https://img.shields.io/npm/v/eslint-config-billogram.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-billogram)

## Install

To install the stable version:

```
npm install --save eslint-config-billogram
```

## Usage

This package inclues the following configurations:

* `billogram` (the default browser rules)
* `billogram/react` (React/JSX rules)

Using the default configuration.

``` json
{
    "extends": "billogram"
}
```

Using additional plugins.


``` json
{
    "extends": ["billogram", "billogram/react"]
}
```

## License

MIT © Billogram (billogram.com)
