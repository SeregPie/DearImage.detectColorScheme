!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("paperduck"),require("@seregpie/k-means")):"function"==typeof define&&define.amd?define(["paperduck","@seregpie/k-means"],t):t((e=e||self).PaperDuck,e.KMeans)}(this,function(e,t){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,e.prototype.scaleDownToContain=function(e,t){return this.width>e||this.height>t?this.scaleToContain(e,t):this};e.extractColorScheme=function(e){var n=this;return Promise.resolve().then(function(){return n.loadFromExcept(e)}).then(function(e){for(var n=e.scaleDownToContain(128,128).toImageData().data,r=[],o=0,a=n.length;o<a;o+=4)if(n[o+3]){var i=n[o+0],u=n[o+1],f=n[o+2];r.push([i,u,f])}var s=r.length,c=[],h=0;return t(r,128).forEach(function(e){var n=e.length;if(n/s>4/128){var o=t.mean(r).map(function(e){return Math.round(e)});c.push([o,n]),n>h&&(h=n)}}),c.sort(function(e,t){var n=e[1];return t[1]-n}),c.forEach(function(e,t){c[t][1]/=h}),c})}});