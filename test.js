let Assert = require('assert').strict;
let Path = require('path');

require('./index');
let DearImage = require('dear-image');

(async () => {
	let path = Path.resolve(__dirname, './images/paper-clips.png');
	let colorScheme = await DearImage.detectColorScheme(path);
	Assert.deepEqual(colorScheme, [
		['#fe6e29', 1],
		['#fe732d', 1],
	]);
})();
