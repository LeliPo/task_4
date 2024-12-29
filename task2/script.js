const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
}
)

const a =document.querySelector('#alert');
a.addEventListener('click', () => {
    alert ('простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.')
} )

const pr = document.querySelector('#prompt');
pr.addEventListener('click', () => {
    prompt ('Отображает диалоговое окно с запросом на ввод текста');
})

