const digitar_Tarefa = document.querySelector('.tarefa');
const enviar = document.querySelector('.enviar');
const lista = document.querySelector('.lista');
function criaLi(valor){
    const li = document.createElement('li');
    li.innerHTML = valor;
    li.classList.add('tf');
    lista.appendChild(li);
}
digitar_Tarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(!digitar_Tarefa.value) return;
        criaLi(digitar_Tarefa.value);
        criaButton()
        digitar_Tarefa.value = '';
    }
});
function criaButton(){
    const button = document.createElement('button');
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i> Remover tarefa';
    button.classList.add('bt_remove');
    button.setAttribute('class','apagar');
    lista.appendChild(button);
}
enviar.addEventListener('click',() => {
    if(!digitar_Tarefa.value) return;
    const valor = digitar_Tarefa.value;
    criaLi(valor);
    criaButton();
    digitar_Tarefa.value = '';
});
document.addEventListener('click',(e) => {
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
    }
});