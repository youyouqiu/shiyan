// 主页面b

define(['publicFun', 'f', 'g', 'h'], function(PUBLICFUN, F, G, H) {
  var b = {
    setB1: function(data) {
      b1 = data;
    },

    getB1: function() {
      return b1;
    },

    runB1: function() {
      b.setB1('b');
      console.log('dataB', b.getB1());
      console.log(a1, b1);
      console.log('publicFun', 'f', 'g', 'h', PUBLICFUN, F, G, H);
    }
  }

  return {
    b: b,
  }
});
