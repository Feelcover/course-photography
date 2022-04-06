const activeBurgerMenuButton = document.querySelector('.header__button_menu'); // Кнопка открытия меню
const burgerMenu = document.querySelector('.header__burger'); //Выпадающее меню
const closeBurgerMenuButton = document.querySelector('.header__button_close'); //Кнопка закрытия меню
const mainMenu = document.querySelector('.header__main-menu'); // Основное меню

const submitButton = document.querySelector('.footer__button'); // Кнопка отправки формы
const inputForm = document.querySelector('.footer__form'); // Форма

const buttonMore = document.querySelector('.more'); //Кнопка "подробнее"
const buttonEnroll = document.querySelector('.enroll'); //Кнопка "записаться"
const buttonEnrollTwo = document.querySelector('.enroll-two'); //вторая кнопка "записаться"

//Открываем выпадающее меню
activeBurgerMenuButton.addEventListener('click', function (event) {
    mainMenu.classList.add('closed');
    burgerMenu.classList.remove('closed');
});


//Закрывыем выпадающее меню
closeBurgerMenuButton.addEventListener('click', function (event) {
    burgerMenu.classList.add('closed');
    mainMenu.classList.remove('closed');
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
