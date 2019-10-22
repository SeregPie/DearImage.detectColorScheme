import DearImage from 'dear-image';
import KMeansPlusPlus from '@seregpie/k-means-plus-plus';

import Array_prototype_last from './core/Array/prototype/last';

let maxSize = 256;

DearImage.detectColorScheme = function(image) {
	return this.loadFromExcept(image).then(image => {
		let {data} = image.scaleDownIn(maxSize, maxSize).toImageData();
		let vectors = [];
		for (let i = 0, ii = data.length; i < ii; i += 4) {
			if (data[i + 3]) {
				let r = data[i + 0];
				let g = data[i + 1];
				let b = data[i + 2];
				vectors.push([r, g, b]);
			}
		}
		let clusters = KMeansPlusPlus(vectors, 4)
			.sort((a, b) => b.length - a.length);
		if (clusters.length) {
			let lastCluster = Array_prototype_last(clusters);
			return clusters.map(cluster => {
				let weight = Math.round(cluster.length / lastCluster.length);
				let color = `#${KMeansPlusPlus.mean(cluster).map(n => Math.round(n).toString(16).padStart(2, '0')).join('')}`;
				return [color, weight];
			});
		}
		return [];
	});
};
