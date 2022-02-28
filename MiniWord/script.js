let p=document.querySelector('p');
let c=document.querySelector('#color');
let size=document.querySelector('#size');
let font=document.querySelector('#font');
c.addEventListener("input",(e)=>{
    p.style.color=c.value;
})
size.addEventListener('input',(e)=>{
    p.style.fontSize=(size.value)+'px';
})
font.addEventListener('input',(e)=>{
    p.style.fontFamily=font.value;
})