var classA = {
  setData: function (data) {
    a = data;
  },
  
  getData: function () {
    return a;
  },

  operationData: function () {
    var a = [];
    for(var i = 0; i < 10; i++) {
      a.push(i);
    }
    return a;
  }
};
