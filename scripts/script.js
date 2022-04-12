const activeBurgerMenuButton = document.querySelector('.header__button-menu'); // Кнопка открытия меню
const burgerMenu = document.querySelector('.header__burger'); //Выпадающее меню
const mainMenu = document.querySelector('.header__main-menu'); // Основное меню
const headerLogo = mainMenu.querySelector('.header__logo'); // Лого
const headerLinks = mainMenu.querySelector('.header__links'); // Контейнер с ссылками
const compositionLink = document.querySelector('#compositionLink'); // Ссылки из контейнера
const cameraLink = document.querySelector('#cameraLink');
const searchLink = document.querySelector('#searchLink');
const closeBurgerMenuButton = mainMenu.querySelector('.header__button-close'); //Кнопка закрытия меню

const submitButton = document.querySelector('.footer__button'); // Кнопка отправки формы
const inputForm = document.querySelector('.footer__form'); // Форма

const buttonMore = document.querySelector('.more'); //Кнопка "подробнее"
const buttonEnroll = document.querySelector('#enroll'); //Кнопка "записаться"
const buttonEnrollTwo = document.querySelector('#enroll-two'); //вторая кнопка "записаться"

//Открываем выпадающее меню

activeBurgerMenuButton.addEventListener('click', function (event) {

    mainMenu.classList.add('header__burger');
    mainMenu.classList.remove('header__main-menu');

    headerLogo.classList.add('header__burger-logo');
    headerLogo.classList.remove('header__logo');

    headerLinks.classList.add('header__burger-links');
    headerLinks.classList.remove('header__links');

    compositionLink.classList.add('header__burger-link');
    compositionLink.classList.remove('header__link');
    cameraLink.classList.add('header__burger-link');
    cameraLink.classList.remove('header__link');
    searchLink.classList.add('header__burger-link');
    searchLink.classList.remove('header__link');
    
    activeBurgerMenuButton.classList.add('header__button-hidden');

    closeBurgerMenuButton.classList.remove('header__button-hidden');
});

//Закрывыем выпадающее меню
closeBurgerMenuButton.addEventListener('click', function (event) {
    mainMenu.classList.remove('header__burger');
    mainMenu.classList.add('header__main-menu');

    headerLogo.classList.remove('header__burger-logo');
    headerLogo.classList.add('header__logo');

    headerLinks.classList.remove('header__burger-links');
    headerLinks.classList.add('header__links');

    compositionLink.classList.remove('header__burger-link');
    compositionLink.classList.add('header__link');
    cameraLink.classList.remove('header__burger-link');
    cameraLink.classList.add('header__link');
    searchLink.classList.remove('header__burger-link');
    searchLink.classList.add('header__link');

    activeBurgerMenuButton.classList.remove('header__button-hidden');

    closeBurgerMenuButton.classList.add('header__button-hidden');
});



//Отправляем форму
function sendForm(evt) {
    evt.preventDefault();
    submitButton.style.fontWeight = '400';
    submitButton.textContent = 'Спасибо!';
}

inputForm.addEventListener('submit', sendForm);


//Переходы по якорным ссылкам
buttonMore.addEventListener('click', function (event) {
    document.location='#composition';
});

buttonEnroll.addEventListener('click', function (event) {
    document.location='#footer';
});

buttonEnrollTwo.addEventListener('click', function (event) {
    document.location='#footer';
});
