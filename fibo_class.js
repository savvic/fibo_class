// Generated by CoffeeScript 1.12.2
(function() {
  var EventEmmiter, Foo, after, f, fibo_1, fibo_2, fibo_3, fs, log, numFile, pry, server, strFile;

  log = console.log.bind(console);

  fs = require('fs');

  numFile = './numbers.txt';

  strFile = './string.txt';

  EventEmmiter = require('events');

  server = require('http').createServer();

  pry = require('pry');

  after = function(ms, fn) {
    return setTimeout(fn, ms);
  };

  Foo = function() {};

  Foo.prototype.bar = 'baz';

  Foo.prototype.does = function() {
    return log('does');
  };

  f = new Foo();

  log(f.bar);

  f.bar = 'buzz';

  log(f.bar);

  Foo.talk = function() {
    return log('hi');
  };

  Foo.talk();

  f.does();

  fibo_1 = function(num) {
    var a, b, temp;
    a = 1;
    b = 0;
    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  };

  fibo_2 = function(num, memo) {
    memo = memo || {};
    if (memo[num]) {
      return memo[num];
    }
    if (num < 2) {
      return 1;
    }
    return memo[num] = fibo_2(num - 1, memo) + fibo_2(num - 2, memo);
  };

  fibo_3 = function(num, count) {
    var i, indent;
    indent = '';
    i = 0;
    while (i < count) {
      indent += ' ';
      i++;
    }
    log(indent + 'fibo(' + num + ')');
    if (num < 2) {
      return 1;
    }
    return fibo_3(num - 1, count + 4) + fibo_3(num - 2, count + 4);
  };

  log(fibo_3(5, 0));

  log(fibo_2(5));

}).call(this);
