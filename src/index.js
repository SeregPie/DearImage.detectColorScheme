import DearColor from './DearColor';
import DearImage from 'dear-image';
import KMeansPlusPlus from '@seregpie/k-means-plus-plus';

import Array_prototype_last from './core/Array/prototype/last';

DearImage.detectColorScheme = function(image) {
	return DearImage.loadFromExcept(image).then(image => {
		let {data} = image.scaleDownIn(100, 100).toImageData();
		let vectors = [];
		for (let i = 0, ii = data.length; i < ii; i += 4) {
			if (data[i + 3]) {
				let r = data[i + 0];
				let g = data[i + 1];
				let b = data[i + 2];
				vectors.push([r, g, b]);
			}
		}
		let clusters = KMeansPlusPlus(vectors, 32)
			.filter(cluster => cluster.length / vectors.length > 1/16)
			.sort((cluster, otherCluster) => otherCluster.length - cluster.length);
		if (clusters.length) {
			let lastCluster = Array_prototype_last(clusters);
			return clusters.map(cluster => {
				let weight = Math.round(cluster.length / lastCluster.length);
				let color = `${DearColor.mean(cluster)}`;
				return [color, weight];
			});
		}
		return [];
	});
};
