/* global it */

'use strict';

var assert = require('assert');
var nestedProp = require('./');

it('get should work', function () {
	var f1 = {foo: {bar: 1}};
	assert(nestedProp.get(f1) === f1);
	assert(nestedProp.get(f1, 'foo') === f1.foo);
	assert(nestedProp.get({foo: 1}, 'foo') === 1);
	assert(nestedProp.get({foo: null}, 'foo') === null);
	assert(nestedProp.get({foo: undefined}, 'foo') === undefined);
	assert(nestedProp.get({foo: {bar: true}}, 'foo.bar') === true);
	assert(nestedProp.get({foo: {bar: {baz: true}}}, 'foo.bar.baz') === true);
	assert(nestedProp.get({foo: {bar: {baz: null}}}, 'foo.bar.baz') === null);
	assert(nestedProp.get({foo: {bar: 'a'}}, 'foo.fake.fake2') === undefined);
	assert(nestedProp.get({foo: {'foo.bar': 1}}, ['foo', 'foo.bar']) === 1);
});

it('set should work', function () {
	assert.deepEqual(nestedProp.set({}), {});
	assert.deepEqual(nestedProp.set({foo: 1}, 'foo', 2), {foo: 2});
	assert.deepEqual(nestedProp.set({foo: 1}, 'foo.bar', 1), {foo: {bar: 1}});
	assert.deepEqual(nestedProp.set({foo: {jar: 1}}, 'foo.bar', 1), {foo: {jar:1, bar: 1}});
});
