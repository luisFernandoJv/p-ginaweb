const containerHeader = document.querySelector('.container-header');
const btnNavegador = document.querySelector('.btn');
const cardMenu = document.querySelector('.card');
const btnHero = document.querySelector('.btn-hero');

// btnNavegador.addEventListener('click', function(e){
    
//     window.confirm('tem certeza que você deseja olhar o cardapio?');
// });
btnNavegador.removeEventListener('click', falaAlert);
btnHero.addEventListener('click', e => { 
    falaAlert();
});
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
// btnHero.removeEventListener('click', backgroundColor);
function falaAlert(){

        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    
}

