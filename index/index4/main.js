// main.js

// 模块路径配置
require.config({
  paths: {
    "data": "data",
    "publicFun": "publicFun",
    "a": "a",
    "b": "b",
  },
  // shim: {
  //   'a':{
  //     // deps: [],
  //     exports: 'A'
  //   },
  //   'b': {
  //     // deps: [],
  //     exports: 'B'
  //   }
  // }
});

// 加载模块
require(['data', 'publicFun', 'a', 'b'], function (DATA, PUBLICFUN, A, B) {
  alert("加载成功-1！");

  var data = DATA;
  var publicFun = PUBLICFUN.publicFun;
  var a = A.a;
  var b = B.b;

  console.log('a', a);
  console.log('b', b);
  console.log('a1', a1);
  console.log('b1', b1);
  console.log('c1', c1);
  console.log('d1', d1);
  console.log('e1', e1);
  console.log('f1', f1);
  console.log('g1', g1);
  console.log('h1', h1);
  console.log('publicFun', publicFun);

  var btnA = document.getElementById('btnA');
  var btnB = document.getElementById('btnB');
  btnA.onclick = a.runA1;
  btnB.onclick = b.runB1;
});
