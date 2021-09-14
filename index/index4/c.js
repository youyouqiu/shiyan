// 分页面a-c

define(['publicFun'], function(PUBLICFUN) {
  var btnC = document.getElementById('btnC');

  var c = {
    setC1: function(data) {
      c1 = data;
    },

    getC1: function() {
      return c1;
    },

    runC1: function() {
      // console.log('a', 'd', 'e', A, D, E);
      console.log('publicFun-c', PUBLICFUN);
    }
  }

  btnC.onclick = c.runC1;

  return {
    c: c,
  }
});
