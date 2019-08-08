import DearImage from 'dear-image';

DearImage.detectColorScheme = function() {
	return Promise
		.resolve()
		.then(() => {
			return [
				['#ffffff', 2/3],
				['#000000', 1/3],
			];
		});
};
