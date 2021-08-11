let iconMenu = document.querySelector('.icon-menu'),
  menu = document.querySelector('.menu__body')

iconMenu.addEventListener('click', function () {
  if (menu.classList.contains('menu__show')) {
    console.log(menu.classList.contains('menu__show'))
    menu.classList.remove('menu__show')
  }
  menu.classList.add('menu__show')
})

// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numSquares = 50;
// const squares = [];

// for (let i = 0; i < numSquares; i++) {
//   let square = document.createElement("div");
//   square.classList.add("square");
//   square.style.background = colors[Math.floor(Math.random() * colors.length)];
//   square.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   square.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   square.style.transform = `scale(${Math.random()})`;
//   square.style.width = `${Math.random()}em`;
//   square.style.height = square.style.width;

//   squares.push(square);
//   document.body.append(square);
// }

// // Keyframes
// squares.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });
