# DearImage.detectColorScheme

`DearImage.detectColorScheme(image)`

Detects the image color scheme.

| argument | description |
| ---: | :--- |
| `image` | Everything the function `.loadFrom` supports. |

Returns a promise that resolves to the detected color scheme.

## dependencies

- [KMeansPlusPlus](https://github.com/SeregPie/KMeansPlusPlus)

## setup

### npm

```shell
npm i dear-image.detect-color-scheme
```

### ES module

```javascript
import 'dear-image.detect-color-scheme';
import DearImage from 'dear-image';
```

### Node

```javascript
require('dear-image.detect-color-scheme');
let DearImage = require('dear-image');
```

### browser

```html
<script src="https://unpkg.com/dear-image"></script>
<script src="https://unpkg.com/just-my-luck"></script>
<script src="https://unpkg.com/@seregpie/vector-math"></script>
<script src="https://unpkg.com/@seregpie/k-means"></script>
<script src="https://unpkg.com/@seregpie/k-means-plus-plus"></script>
<script src="https://unpkg.com/dear-image.detect-color-scheme"></script>
```

## usage

```javascript
let colorScheme = await DearImage.detectColorScheme(image);
// => [['#acacac', 9], ['#24ff00', 1]]
```
