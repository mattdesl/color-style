[![browser support](https://ci.testling.com/mattdesl/color-style.png)](https://ci.testling.com/mattdesl/color-style)

# color-style

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

A quick way to avoid string concatenation when setting CSS or HTML5 Canvas context colors.

## Usage

[![NPM](https://nodei.co/npm/color-style.png)](https://nodei.co/npm/color-style/)


```js
var rgb = require('color-style');
var hsl = require('color-style').hsl;

//... somewhere in your render loop
context.fillStyle = rgb(255, 0, 0); // "rgba(255,0,0,1.0)"
context.fillStyle = rgb(255, 0, 0, 0.5); // "rgba(255,0,0,0.5)"

context.fillStyle = rgb([255, 128, 0], 0.8); // "rgba(255, 128, 0, 0.8)"
context.fillStyle = rgb(); // "rgba(0,0,0,1.0)"

context.fillStyle = hsl(230, 50, 20, 0.5); // "hsla(230,50%,20%,0.5)"
```

### `colorStyle(r, g, b, a)`

Returns an `"rgba(..)"` string. This function is just an alias for `colorStyle.rgb`.

### `colorStyle.rgb(r, g, b[, a])`
### `colorStyle.hsl(h, s, l[, a])`

Color components default to 0 if not specified; alpha will default to 1.0.

You can also pass an array or string:

```
colorStyle([r, g, b], a);
colorStyle([r, g, b, a]);
colorStyle('#ddffff');
```

### `colorStyle.rgba(r, g, b, a)`
### `colorStyle.hsla(h, s, l, a)`

Included for completeness; just aliases for the above functions.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/color-style/blob/master/LICENSE.md) for details.
