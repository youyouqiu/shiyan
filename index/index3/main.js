// 获取元素

const box = document.getElementsByTagName('div');
const lookBoxTop = box[0].getBoundingClientRect().top;
const arrLookNodeList = [];
console.log(box);
console.log(lookBoxTop);

function scrollFunc() {
  for (let i = 0; i < box.length; i++) {
    const boxHeight = box[i].getBoundingClientRect().top;
    console.log(boxHeight);
    if (boxHeight > 0 && boxHeight < lookHeight) {
      arrLookNodeList.push(box[i]);
      console.log(arrLookNodeList);
    }
  }
}

window.onmousewheel = document.onmousewheel = scrollFunc;
