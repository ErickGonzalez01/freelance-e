import './style.css'

let aside = document.getElementById('aside');
let btnMenu = document.getElementById('btn-menu');

let hidden = "hidden";
let opacity0 = "opacity-0";
let opacity100 = "opacity-100";

btnMenu.addEventListener('click', () => {
    if (aside.classList.contains(hidden)) {
        aside.classList.remove(hidden);
        aside.classList.remove(opacity0);
        aside.classList.add(opacity100);
    } else {
        aside.classList.add(opacity0);
        setTimeout(() => {
            aside.classList.add(hidden);
        }, 700);
    }
});