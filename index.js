'use strict';

var he = require('he');
var parseUrl = require('url').parse;

function parse (url) {
  var decoded = he.decode(url);
  var parsed = parseUrl(decoded, true, true);
  return parsed.hostname === 'cdn.embedly.com' && parsed.query || null;
}

module.exports.parse = parse;
