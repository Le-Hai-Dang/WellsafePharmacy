const register=document.querySelector('.js-register')
const modalRegister=document.querySelector('.js-register-form')
const closeRegister=document.querySelector('.js-close')
const Login=document.querySelector('.js-login')
const modalLogin=document.querySelector('.js-login-form')
const closeLogin=document.querySelector('.js-close-login')


function showRegister(){
	modalRegister.classList.add('open')
}
function hideRegister(){
	modalRegister.classList.remove('open')
}
register.addEventListener('click', showRegister)

closeRegister.addEventListener('click', hideRegister)
function showLogin(){
	modalLogin.classList.add('open')
}
function hideLogin(){
	modalLogin.classList.remove('open')
}
Login.addEventListener('click',showLogin)
closeLogin.addEventListener('click', hideLogin)

//Slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
	clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



