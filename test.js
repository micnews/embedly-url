'use strict';

var test = require('tape');
var embedlyUrl = require('./index');

test('parse() valid url', function (t) {
  var actual = embedlyUrl.parse('//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F3rS6mZUo3fg%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3rS6mZUo3fg&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F3rS6mZUo3fg%2Fhqdefault.jpg&amp;key=25bf3602073943478e54668402a4f5a8&amp;type=text%2Fhtml&amp;schema=youtube');
  var expected = {
    src: 'http://www.youtube.com/embed/3rS6mZUo3fg?feature=oembed',
    url: 'https://www.youtube.com/watch?v=3rS6mZUo3fg',
    image: 'http://i.ytimg.com/vi/3rS6mZUo3fg/hqdefault.jpg',
    key: '25bf3602073943478e54668402a4f5a8',
    type: 'text/html',
    schema: 'youtube'
  };

  t.deepEqual(actual, expected);
  t.end();
});

test('parse() not valid url', function (t) {
  var actual = embedlyUrl.parse('//foo.com/beep/boop');
  var expected = null;
  t.equal(actual, expected);
  t.end();
});
