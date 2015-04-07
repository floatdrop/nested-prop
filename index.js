'use strict';

var isPrimitive = require('is-primitive');

function isObject(x) {
	return typeof x === 'object' && x !== null;
}

module.exports.get = function getProp(obj, path) {
	if (!isObject(obj)) {
		return obj;
	}

	if (typeof path === 'string') {
		path = path.split('.');
	}

	if (!Array.isArray(path)) {
		return obj;
	}

	return getProp(obj[path.shift()], path.length && path);
};

module.exports.set = function setProp(obj, path, value) {
	if (!isObject(obj)) {
		return obj;
	}

	if (typeof path === 'string') {
		path = path.split('.');
	}

	if (!Array.isArray(path)) {
		return obj;
	}

	(function set(obj, path) {
		var next = path.shift();

		if (isPrimitive(obj[next])) {
			obj[next] = {};
		}

		if (path.length) {
			return set(obj[next], path);
		}

		obj[next] = value;
	})(obj, path);

	return obj;
};
