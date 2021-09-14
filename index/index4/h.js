// 分页面b-h

define(['publicFun'], function(PUBLICFUN) {
  var btnH = document.getElementById('btnH');

  var h = {
    setH1: function(data) {
      h1 = data;
    },

    getH1: function() {
      return h1;
    },

    runH1: function() {
      // console.log('b', 'f', 'g', B, F, G);
      console.log('publicFun-h', PUBLICFUN);
    }
  }

  btnH.onclick = h.runH1;

  return {
    h: h,
  }
});
