classA.setData(3);
var f = classA.getData();
var g = classA.operationData();

var classPublic = {
  judgeEmpty: function (data) {
    if (!data && data.length > 0) {
      return data;
    } else {
      return "空值";
    }
  },
  indexConversion: function (data) {
    if (data.length > 0) {
      return data.map((item, index) => {
        return index + 1
      })
    } else {
      return "空数组";
    }
  }
}
