[![browser support](https://ci.testling.com/mattdesl/color-style.png)](https://ci.testling.com/mattdesl/color-style)

# color-style

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Quickly get an `rgba()` or `hsla()` string for CSS and 2D context, without string concatenation.

```js
var rgb = require('color-style');
context.fillStyle = rgb(128, 0, 255);
```

## Usage

[![NPM](https://nodei.co/npm/color-style.png)](https://nodei.co/npm/color-style/)


```js
var rgb = require('color-style').rgb;
var hsl = require('color-style').hsl;

//... somewhere in your render loop
context.fillStyle = rgb(255, 0, 0); // "rgba(255,0,0,1.0)"
context.fillStyle = rgb(255, 0, 0, 0.5); // "rgba(255,0,0,0.5)"

context.fillStyle = rgb([255, 128, 0], 0.8); // "rgba(255, 128, 0, 0.8)"
context.fillStyle = rgb(); // "rgba(0,0,0,1.0)"

context.fillStyle = hsl(230, 50, 20, 0.5); // "hsla(230,50%,20%,0.5)"
```

Color components default to 0 if not specified; alpha will default to 1.0.

You can also pass an array or string to all methods:

```js
colorStyle([r, g, b], a);
colorStyle([r, g, b, a]);
colorStyle('#ddffff');
```

## methods

#### `colorStyle(r, g, b, a)`

The same as `colorStyle.rgb` below.

#### `colorStyle.rgb(r, g, b, a)`

Returns a `"rgba(..)"` string. This is also exported as the main function.

#### `colorStyle.hsl(h, s, l, a)`

Returns a `"hsla(..)"` string.

#### `colorStyle.rgba(r, g, b, a)`
#### `colorStyle.hsla(h, s, l, a)`

Included for completeness; just aliases for the above functions.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/color-style/blob/master/LICENSE.md) for details.
