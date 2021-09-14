// 分页面b-f

define(['publicFun'], function(PUBLICFUN) {
  var btnF = document.getElementById('btnF');

  var f = {
    setF1: function(data) {
      f1 = data;
    },

    getF1: function() {
      return f1;
    },

    runF1: function() {
      // console.log('b', 'g', 'h', B, G, H);
      console.log('publicFun-f', PUBLICFUN);
    }
  }

  btnF.onclick = f.runF1;

  return {
    f: f,
  }
});
