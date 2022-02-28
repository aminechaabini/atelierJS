let todos=document.querySelector('ul');
let button=document.querySelector('#add');
let name=document.querySelector('#name');
let content=document.querySelector('#content');
button.addEventListener('click', (e)=>{
    todos.innerHTML=todos.innerHTML+`<li style="background-color: white; border: black">${name.value} : ${content.value}</li>`;
})
todos.addEventListener('dblclick',(e)=>{
    const a=e.target;
    a.parentNode.removeChild(a);
})