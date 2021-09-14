// 分页面a-e

define(['publicFun'], function(PUBLICFUN) {
  var btnE = document.getElementById('btnE');

  var e = {
    setE1: function(data) {
      e1 = data;
    },

    getE1: function() {
      return e1;
    },

    runE1: function() {
      // console.log('a', 'c', 'd', A, C, D);
      console.log('publicFun-e', PUBLICFUN);
    }
  }

  btnE.onclick = e.runE1;

  return {
    e: e,
  }
});
