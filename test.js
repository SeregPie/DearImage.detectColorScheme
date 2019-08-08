let assert = require('assert');

require('./index');
let DearImage = require('dear-image');

(async () => {
	let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Milka_Logo.svg/220px-Milka_Logo.svg.png';
	let imageColorScheme = await DearImage.detectColorScheme(imageUrl);
	assert.deepStrictEqual(imageColorScheme, [
		['#ffffff', 2/3],
		['#000000', 1/3],
	]);
})();
