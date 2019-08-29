let assert = require('assert').strict;
let path = require('path');

require('./index');
let DearImage = require('dear-image');

(async () => {
	let colorScheme = await DearImage.detectColorScheme(path.join(__dirname, './images/paper-clips.png'));
	assert.deepEqual(colorScheme, [['#fe702b', 1]]);
})();
