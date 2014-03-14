/**!
 * mm - test/co.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var should = require('should');
var urllib = require('co-urllib');
var co = require('co');
var fs = require('fs');
var mm = require('../');

co(function *() {
  mm.http.request(/\//, fs.createReadStream(__filename), {statusCode: 404});
  var r = yield urllib.request('http://nodejs.org');
  console.log(r.status, r.headers, r.data.length);
  r.data.toString().should.equal(fs.readFileSync(__filename, 'utf8'));
})();
