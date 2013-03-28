#inspectpoint

> Transforms objects intro pipeable buffers using [util.inspect](http://nodejs.org/api/util.html#util_util_inspect_object_options),
> useful when debugging object streams.

## Installation

```sheel
npm install inspectpoint
```

## Documentation

`inspectpoint` is a `Transform` stream there takes a object stream and
outputs an buffer stream.

```javascript
var inspectpoint = require('inspectpoint');

// `inspectpoint` takes an optional object there is then used in `util.inspect`
var inspect = inspectpoint({
  depth: null,
  colors: true
});

inspect.pipe(process.stdout);

inspect.write({array: [1,2,3,4]});
inspect.end();

// Output is:
// { array: [ 1, 2, 3, 4 ] }
```

##License

**The software is license under "MIT"**

> Copyright (c) 2013 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
