import KMeansPlusPlus from '@seregpie/k-means-plus-plus';

export default class {
	static mean(colors) {
		return `#${KMeansPlusPlus.mean(colors).map(n => Math.round(n).toString(16).padStart(2, '0')).join('')}`;
	}
}
