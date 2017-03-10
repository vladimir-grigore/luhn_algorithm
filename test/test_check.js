var assert = require('chai').assert;
var check = require('../check.js');

describe("Check", function(){
  it('should return true if a number passes Luhn algorithm', function(){
    assert.true(check(79927398713));
  })

  it('should return false if a number does not pass Luhn algorithm', function(){
    assert.false(check(79927398711));
  })
})