// 分页面a-d

define(['publicFun'], function(PUBLICFUN) {
  var btnD = document.getElementById('btnD');

  var d = {
    setD1: function(data) {
      d1 = data;
    },

    getD1: function() {
      return d1;
    },

    runD1: function() {
      // console.log('a', 'c', 'e', A, C, E);
      console.log('publicFun-d', PUBLICFUN);
    }
  }

  btnD.onclick = d.runD1;

  return {
    d: d,
  }
});
