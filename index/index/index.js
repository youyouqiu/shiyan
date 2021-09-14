// 页面跳转
const ROUTER = new Router();

function gotoUrl(numberType) {
  const BOX = document.getElementById('box');
  const GOLIST = document.getElementsByTagName('li');
  const CONTENT = document.getElementById('content');
  // console.log(history, 'history1');
  console.log(window.location, 'window.location1');
  switch (numberType) {
    case 0:
      // window.location = './index.html';
      history.pushState({name: 'index'}, '', '/index');
      // window.location = '#index';
      ROUTER.setPage('/index', () => {
        BOX.style.backgroundColor = 'rgb(78, 110, 242)';
        for (let i = 0; i < GOLIST.length; i++) {
          GOLIST[i].style.color = 'rgb(78, 110, 242)';
          if (i !== GOLIST.length) {
            GOLIST[i].style.borderRightColor = 'rgb(78, 110, 242)';
          }
        }
        CONTENT.style.backgroundColor = 'rgb(78, 110, 242)';
        CONTENT.innerText = 'HTML';
      });
      ROUTER.getPage('/index');
      break;
    case 1:
      // window.location = './css.html';
      history.pushState({name: 'css'}, '', '/css');
      // window.location = '#css';
      ROUTER.setPage('/css', () => {
        BOX.style.backgroundColor = '#FFD306';
        for (let i = 0; i < GOLIST.length; i++) {
          GOLIST[i].style.color = '#FFD306';
          if (i !== GOLIST.length) {
            GOLIST[i].style.borderRightColor = '#FFD306';
          }
        }
        CONTENT.style.backgroundColor = '#FFD306';
        CONTENT.innerText = 'CSS';
      });
      ROUTER.getPage('/css');
      break;
    case 2:
      // window.location = './javaScript.html';
      history.pushState({name: 'javaScript'}, '', '/javaScript');
      // window.location = '#javaScript';
      ROUTER.setPage('/javaScript', () => {
        BOX.style.backgroundColor = 'rgb(138, 0, 0)';
        for (let i = 0; i < GOLIST.length; i++) {
          GOLIST[i].style.color = 'rgb(138, 0, 0)';
          if (i !== GOLIST.length) {
            GOLIST[i].style.borderRightColor = 'rgb(138, 0, 0)';
          }
        }
        CONTENT.style.backgroundColor = 'rgb(138, 0, 0)';
        CONTENT.innerText = 'JAVASCRIPT';
      });
      ROUTER.getPage('/javaScript');
      break;
    default: console.log('no-default !');
  }
}

window.addEventListener('hashchange', () => {
  // console.log(history, 'history2');
  console.log(window.location, 'window.location2');
  const HASHPATH = window.location.hash || '';
  if (HASHPATH) {
    // 干点啥
  }
}, false);

window.addEventListener('popstate', () => {
  console.log(history, 'history3');
  console.log(window.location, 'window.location3');
  // const HASHPATH = window.location.hash || '';
  const PATHNAME = ((history || {}).state || {}).name || '';
  let numType = 0;
  if (PATHNAME) {
    switch(PATHNAME) {
      case 'index':
        numType = 0;
        break;
      case 'css':
        numType = 1;
        break;
      case 'javaScript':
        numType = 2;
        break;
      default: console.log('no-default !');
    }
  }
}, false);
