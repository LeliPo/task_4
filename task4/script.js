const b = document.querySelector('a');
b.addEventListener('click', function (event) {
    const pr = prompt('изменить имя ссылки');
    b.textContent = pr;
    event.preventDefault();
    console.log('действие по умолчанию отменено');
})



