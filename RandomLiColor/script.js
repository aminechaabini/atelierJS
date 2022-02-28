function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
let ol=document.querySelector('ol');
ol.addEventListener('click', (e)=>{
    e.target.style.color=generateRandomColor();
})