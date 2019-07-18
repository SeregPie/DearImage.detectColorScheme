import PaperDuck from 'paperduck';

import KMeans from '@seregpie/k-means';

PaperDuck.prototype.scaleDownToContain = function(width, height) {
	if (this.width > width || this.height > height) {
		return this.scaleToContain(width, height);
	}
	return this;
};

let scaleDown = 128;
let clustersCount = 128;
let schemeColorThreshold = 4 / clustersCount;

PaperDuck.extractColorScheme = function(image) {
	return Promise
		.resolve()
		.then(() => this.loadFromExcept(image))
		.then(image => {
			let {data} = image.scaleDownToContain(scaleDown, scaleDown).toImageData();
			let colors = [];
			for (let i = 0, ii = data.length; i < ii; i += 4) {
				if (data[i + 3]) {
					let r = data[i + 0];
					let g = data[i + 1];
					let b = data[i + 2];
					colors.push([r, g, b]);
				}
			}
			let colorsCount = colors.length;
			let colorScheme = [];
			let aaaa = 0;
			KMeans(colors, clustersCount).forEach(clusterColors => {
				let clusterColorsCount = clusterColors.length;
				let clusterColorsFraction = clusterColorsCount / colorsCount;
				if (clusterColorsFraction > schemeColorThreshold) {
					let schemeColor = KMeans.mean(colors).map(n => Math.round(n));
					colorScheme.push([schemeColor, clusterColorsCount]);
					if (clusterColorsCount > aaaa) {
						aaaa = clusterColorsCount;
					}
				}
			});
			colorScheme.sort(([, a], [, b]) => b - a);
			colorScheme.forEach((v, i) => {
				colorScheme[i][1] /= aaaa;
			});
			return colorScheme;
		});
};
