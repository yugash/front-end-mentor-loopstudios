const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

// document.getElementById("menu-btn").addEventListener('click',navT);
//
// function navT(){
//   alert(123);
// }
