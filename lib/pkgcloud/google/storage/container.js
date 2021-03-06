/*
 * container.js: Google Cloud Storage Bucket
 *
 * (C) 2012 Nodejitsu Inc.
 *
 */

var util = require('util'),
  base  = require('../../core/storage/container'),
  _ = require('underscore');

var Container = exports.Container = function Container(client, details) {
  base.Container.call(this, client, details);
};

util.inherits(Container, base.Container);

Container.prototype._setProperties = function (bucket) {
  this.name = bucket.name;
  this.metadata = bucket.metadata;
  _.extend(this, bucket.metadata);
};

Container.prototype.toJSON = function () {
  return this.metadata;
};
