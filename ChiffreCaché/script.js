let n=Math.floor(Math.random()*10);
let difficulty=prompt('Choisir le niveau de difficulté: 1/2/3');
let tries=(difficulty==1)?9:(difficulty==2)?4:1;
let won=false;
for (let i=0; i<tries;i++){
    let guess=prompt(`Devinez le nombre, il vous reste ${tries-i} essais!!`);
    if (guess==n) {
        alert("Vous avez gagné!");
        won=true;
        break;
    }
    else{
        alert('Faux!')
    }
}
if (won==false){
    alert('Perdu! :c')
}

