module.exports = function() {
  console.log('I am a222.');
  require.ensure([], function(){
    var a3 = require('./a4');
    console.log('require ensure a3');
    a3();
  }, 'a4');
};