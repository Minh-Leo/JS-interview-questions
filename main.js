// let ele = document.querySelector('#el2');

// console.log(ele);

// function animate(el, millisec, distance) {
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
//   el.style.position = 'relative';
//   el.style.top = 0;
//   let times = millisec / 10;
//   let portionDis = distance / times;
//   let currentPos = 0;

//   console.log(times, portionDis, el.style.top);

//   const moving = setInterval(() => {
//     if (currentPos >= distance) {
//       clearInterval(moving);
//     }
//     currentPos += portionDis;
//     el.style.top = `${currentPos}px`;
//   }, millisec / times);
// }

// animate(ele, 2000, 800);

// var myReuseableStylesheet = document.createElement('style'),
//     addKeyFrames = null;
// document.head.appendChild( myReuseableStylesheet );
// if (CSS && CSS.supports && CSS.supports('animation: name')){
//     // we can safely assume that the browser supports unprefixed version.
//     addKeyFrames = function(name, frames){
//         var pos = myReuseableStylesheet.length;
//         myReuseableStylesheet.insertRule(
//             "@keyframes " + name + "{" + frames + "}", pos);
//     }
// } else {
//     addKeyFrames = function(name, frames){
//         // Ugly and terrible, but users with this terrible of a browser
//         // *cough* IE *cough* don't deserve a fast site
//         var str = name + "{" + frames + "}",
//             pos = myReuseableStylesheet.length;
//         myReuseableStylesheet.insertRule("@-webkit-keyframes " + str, pos);
//         myReuseableStylesheet.insertRule("@keyframes " + str, pos+1);
//     }
// }
// Example usage:

// addKeyFrames(
//     'fadeAnimation',
//     '0%{opacity:0}' +
//     '100%{opacity:1}'
// );

//
let boxes = document.querySelectorAll('.box');
console.log(boxes);
boxes.forEach((box) =>
  box.addEventListener('click', () => {
    box.classList.toggle('white');
  })
);
