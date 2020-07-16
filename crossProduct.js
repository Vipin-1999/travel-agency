const crossProduct = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));

module.exports = crossProduct