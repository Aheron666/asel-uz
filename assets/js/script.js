const burger = document.querySelector('#burger');
const popap = document.querySelector('#popap');
const menu = document.querySelector('#menu').cloneNode(1);

burger.addEventListener('click', burgerHandler);

function burgerHandler (event) {
    event.preventDefault();
    popap.classList.toggle('open')
    console.log(popap)
    renderPopap();
};

function renderPopap(){
    popap.appendChild(menu)
}

