let ele = document.querySelector('#el2');

console.log(ele);

function animate(el, millisec, distance) {
  // Edited CSS keyframe solution
  //   let style = document.createElement('style');
  //   style.type = 'text/css';
  //   let keyframe = `@keyframes move {
  //         from {top: 0px;}
  //         to {top: ${distance}px;}
  //     }`;
  //   style.innerHTML = keyframe;
  //   document.head.appendChild(style);

  //   el.setAttribute(
  //     'style',
  //     `position: relative; animation: move ${millisec / 1000}s ease`
  //   );

  //   Interval solution
  el.style.position = 'relative';
  el.style.top = 0;
  let times = millisec / 10;
  let portionDis = distance / times;
  let currentPos = 0;

  console.log(times, portionDis, el.style.top);

  const moving = setInterval(() => {
    if (currentPos >= distance) {
      clearInterval(moving);
    }
    currentPos += portionDis;
    el.style.top = `${currentPos}px`;
  }, millisec / times);
}

animate(ele, 2000, 800);
