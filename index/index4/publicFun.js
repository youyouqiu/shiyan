// 公共方法

define(function() {
  var publicFun = {
    isNull: function(data) {
      if (data !== null) {
        return "非空";
      };
      return;
    }
  }

  return {
    publicFun: publicFun,
  }
});
