const methods = {};
[
	'get',
].forEach(method => {
	methods[method] = require(`./${method}`)[method];
});

module.exports = methods;
