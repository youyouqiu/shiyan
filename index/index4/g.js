// 分页面b-g

define(['publicFun'], function(PUBLICFUN) {
  var btnG = document.getElementById('btnG');

  var g = {
    setG1: function(data) {
      g1 = data;
    },

    getG1: function() {
      return g1;
    },

    runG1: function() {
      // console.log('b', 'f', 'h', B, F, H);
      console.log('publicFun-g', PUBLICFUN);
    }
  }

  btnG.onclick = g.runG1;

  return {
    g: g,
  }
});
