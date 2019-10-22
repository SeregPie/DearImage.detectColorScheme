let assert = require('assert').strict;

require('./index');
let DearImage = require('dear-image');

(async () => {
	let colorScheme = await DearImage.detectColorScheme('./images/paper-clips.png');
	assert.deepEqual(colorScheme, [['#fe702b', 1]]);
})();
