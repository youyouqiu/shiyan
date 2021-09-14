window.onload = () => {
  const BOX = document.getElementById('box');
  const CONTENT = document.getElementById('content');

  // 创建导航
  const NAVIGATION = document.createElement('ul');
  let newText = '';
  for (let i = 0; i < 3; i++) {
    const NAVIGATIONITEM = document.createElement('li');
    switch (i) {
      case 0:
        newText = '首页';
        break;
      case 1:
        newText = '二页';
        break;
      case 2:
        newText = '三页';
        break;
    }
    const TEXT = document.createTextNode(newText);
    NAVIGATIONITEM.appendChild(TEXT);
    NAVIGATIONITEM.onclick = () => { gotoUrl(i) };
    NAVIGATION.appendChild(NAVIGATIONITEM);
  }
  BOX.insertBefore(NAVIGATION, CONTENT);
}
