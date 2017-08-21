log = console.log.bind(console)
fs = require 'fs'
numFile = './numbers.txt'
strFile = './string.txt'
EventEmmiter = require 'events'
server = require('http').createServer()
pry = require 'pry'

after = (ms, fn) -> setTimeout(fn, ms)


# STATIC vs DYNAMIC properties

Foo = () ->
# defining a shared method for the class:
Foo::bar = 'baz'
# defining a public static method for the class before creation of an instance f:
Foo::does = () ->
  log 'does'
# creating a class instance:
f = new Foo()
log f.bar
# overwriting variable on instance of a class:
f.bar = 'buzz'
log f.bar
# defining a public static method for the class after creation of an instance f:
Foo.talk = ->
  log 'hi'
Foo.talk()
f.does()
# f.talk() # err: f.talk is not a function

# FIBONACCI

# loop - O(n) time complexity, Constant space complexity

fibo_1 = (num) ->
  a = 1
  b = 0
  while num >= 0
    temp = a
    a = a + b
    b = temp
    num--
  b

# memoization - O(2N) time complexity, O(n) space complexity

fibo_2 = (num, memo) ->
  memo = memo or {}
  return memo[num] if memo[num]
  return 1 if num < 2
  memo[num] = fibo_2(num - 1, memo) + fibo_2(num - 2, memo)

# recursion - O(2^N) time complexity, O(n) space complexity

fibo_3 = (num, count) ->
  indent = ''
  i = 0
  while i < count
    indent += ' '
    i++
  log indent + 'fibo(' + num + ')'
  return 1 if num < 2
  fibo_3(num - 1, count + 4) + fibo_3(num - 2, count + 4)

log fibo_3 5, 0
log fibo_2 5











