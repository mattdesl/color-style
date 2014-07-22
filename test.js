var color = require('./');

require('tape').test('testing color-style', function(t) {
    function testrgb(func, name) {
        t.equal(func(255,155,100), 'rgba(255,155,100,'+1.0+')', name+': function works');
        t.equal(func(12.5,155,100), 'rgba(12,155,100,'+1.0+')', name+': floors RGB components');
        t.equal(func(12,155,100,0.5), 'rgba(12,155,100,'+0.5+')', name+': modifies alpha');
        t.equal(func('red'), 'red', name+': returns strings');
        t.equal(func([255,155,100]), 'rgba(255,155,100,'+1.0+')', name+': accepts arrays');
        t.equal(func([255,155,100], 0.25), 'rgba(255,155,100,'+0.25+')', name+': accepts arrays + alpha');
        t.equal(func(), 'rgba(0,0,0,'+1+')', name+': default black');
    }

    function testhsl(func, name) {
        t.equal(func(255,75,100), 'hsla(255,75%,100%,'+1.0+')', name+': function works');
        t.equal(func(-360,75,100), 'hsla(-360,75%,100%,'+1.0+')', name+': negative hue');
        t.equal(func(12.5,75,100), 'hsla(12.5,75%,100%,'+1.0+')', name+': does not floor HSL components');
        t.equal(func(12,75,100,0.5), 'hsla(12,75%,100%,'+0.5+')', name+': modifies alpha');
        t.equal(func('red'), 'red', name+': returns strings');
        t.equal(func([255,75,100]), 'hsla(255,75%,100%,'+1.0+')', name+': accepts arrays');
        t.equal(func([255,75,100], 0.25), 'hsla(255,75%,100%,'+0.25+')', name+': accepts arrays + alpha');
        t.equal(func(), 'hsla(0,0%,0%,'+1+')', name+': default black');
    }

    testrgb(color, 'color()');
    testrgb(color.rgb, 'color.rgb()');
    
    testhsl(color.hsl, 'color.hsl()');

    t.equal(color.rgb, color.rgba);
    t.equal(color.hsl, color.hsla);

    t.end();
});