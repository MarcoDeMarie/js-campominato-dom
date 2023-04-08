const hide = document.querySelector('.hide')
const button = document.querySelector('.start')
const container = document.querySelector('.container')
const testo = document.querySelector('.txt')
let punteggio = 0


button.addEventListener('click', function(){
  container.classList.remove('hide')
  this.classList.toggle('hide')
})



const listaBombe = []

while(listaBombe.length < 16){
  let rand = Math.floor((Math.random()* 100) +1)

  if(listaBombe.includes(rand)){
  }
  else{listaBombe.push(rand)}
}

console.log(listaBombe)



for(let i = 1; i <= 100; i++){

  const creazioneCella = celle();
  
  creazioneCella.addEventListener('click', function(){

    if(listaBombe.includes(i)){
      this.classList.add('cubo-bomba')
      container.classList.add('hide')
      testo.innerHTML = 'argh hai preso una bomba, il tuo punteggio è di ' + punteggio
    }

    else{this.classList.add('click')
    punteggio = punteggio + 1
    console.log(punteggio)
      if(punteggio === 84){
        container.classList.add('hide')
        testo.innerHTML = 'hai vinto'
      }
  }

    console.log(i)
  })

  container.appendChild(creazioneCella)
}

/////////////////////////////////////////////FUNZIONI/////////////////////////////////////////


function celle(){
  const cellaNuova = document.createElement('div')
  cellaNuova.className = 'cubo'
  return cellaNuova
}

function bombe(){
  const bombaNuova = document.createElement('div')
  bombaNuova.className = 'cubo-bomba'
  return bombaNuova
}