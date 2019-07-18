require('./index');
let PaperDuck = require('paperduck');

(async () => {
	let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Milka_Logo.svg/220px-Milka_Logo.svg.png';
	let imageColorScheme = await PaperDuck.extractColorScheme(imageUrl);
	console.log(imageColorScheme);
})();
