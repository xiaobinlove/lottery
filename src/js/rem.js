const baseSize = 10
let docEl = window.document.documentElement;
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  // const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'

  let clientWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  if (!clientWidth) return;
  let fz;
  let width = clientWidth;
  fz =  width / 10;
  docEl.style.fontSize = fz + 'px';
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
