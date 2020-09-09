let ele = document.querySelector('#el2');
let b = document.querySelector('body');

console.log(ele);

function animate(el, millisec, distance) {
  let style = document.createElement('style');
  style.type = 'text/css';
  let keyframe = `@keyframes move {
        from {top: 0px;}
        to {top: 200px;}
    }`;
  style.innerHTML = keyframe;
  document.head.appendChild(style);

  el.setAttribute('style', `position: relative; animation: move 3s ease`);
}

animate(ele, 2000, 400);
