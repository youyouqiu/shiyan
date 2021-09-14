// main.js

// 模块路径配置
require.config({
  paths: {
    "processData": "process/processData",
    "infoData": "info/infoData",
    "processInputEntry": "processInputEntry2",
    "infoPageList": "infoPageList2",
  },
  shim: {
    'processInputEntry':{
      // deps: [],
      exports: 'pIE'
    },
    'infoPageList': {
      // deps: [],
      exports: 'iPL'
    }
  }
});

// 加载模块
require(['processData', 'infoData', 'processInputEntry', 'infoPageList'], function (processData, infoData, pIE, iPL) {
  // alert("加载成功-1！");
});
