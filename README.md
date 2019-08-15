# DearImage.detectColorScheme

```
DearImage.detectColorScheme(image)
```

Detects image color scheme.

## dependencies

- [KMeansPlusPlus](https://github.com/SeregPie/KMeansPlusPlus)

## setup

### npm

```shell
npm install dear-image.detect-color-scheme
```

### es6

```javascript
import 'dear-image.detect-color-scheme';
import DearImage from 'dear-image';
```

### node

```javascript
require('dear-image.detect-color-scheme');
let DearImage = require('dear-image');
```

### browser

```html
<script src="https://unpkg.com/dear-image"></script>
<script src="https://unpkg.com/just-my-luck"></script>
<script src="https://unpkg.com/@seregpie/k-means"></script>
<script src="https://unpkg.com/@seregpie/k-means-plus-plus"></script>
<script src="https://unpkg.com/dear-image.detect-color-scheme"></script>
```

## usage

```javascript
let colorScheme = await DearImage.detectColorScheme(image);
// => [['#11111', 0.73], ['#11111', 0.27]]
```
