const InputText = document.querySelector('.tex');
const Button = document.querySelector('.but');
const TextField = document.querySelector('#duplicateField');


InputText.addEventListener('input', event => {
    
    TextField.textContent=InputText.value;
});

Button.addEventListener('click', event => {
    console.log(InputText.value);
    InputText.value = '';
    TextField.textContent='';
    event.preventDefault();

});   

    
