// 主页面a

define(['publicFun', 'c', 'd', 'e'], function(PUBLICFUN, C, D, E) {
  var a = {
    setA1: function(data) {
      a1 = data;
    },

    getA1: function() {
      return a1;
    },

    runA1: function() {
      a.setA1('a');
      console.log('dataA', a.getA1());
      console.log(a1, b1);
      console.log('publicFun', 'c', 'd', 'e', PUBLICFUN, C, D, E,);
    }
  }

  return {
    a: a,
  }
});
