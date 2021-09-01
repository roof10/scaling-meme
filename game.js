const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function endGame() {
  showTextNode(99)
}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('button')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)

    }
  })
}

function showOption(option) {
   return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
}
state = Object.assign(state, option.setState)
 showTextNode(nextTextNodeId)
}

const textNodes = [
  {
  id: 1,
  text: 'Una mattina ti svegli di soprassalto, apri la finestra e senti una irrefrenabile voglia di installare una panchina arcobaleno a Fara Sabina. Ce la farai?',
  options: [
    {
      text: 'Certamente!',
      nextText: 2
    },
    {
      text: 'Neanche per sogno!',
      nextText: 99
    },

  ]
},

{
id: 2,
text: 'Ottimo! Per prima cosa, bisogna scegliere il materiale. Prendi il manuale dell\'attivista LGBTQIAPK e ti soffermi su alcuni materiali per panchine arcobaleno...' ,
options: [
  {
    text: 'Metallo: resistente e dal sapore antico',
    nextText: 3
  },
  {
    text: 'Legno: ecologica e durevole',
    nextText: 4
  },
  {
    text: 'Plastica: leggera e versatile',
    nextText: 5
  },
]
},

{
id: 3,
text: 'La tua panchina in ferro battuto pesa l\'ira di Dio e ti è costata un occhio della testa, ma dopotutto sei radical chic e spendere non ti pesa. Adesso cosa si fa?' ,
options: [
  {
    text: 'Parto in cerca di un posto per installarla',
    nextText: 6
  },
  {
    text: 'La vernicio',
    nextText: 7
  },

]
},

{
id: 4,
text: 'Il legno è una scelta ottima. Purtroppo un vasto incendio, partito inspiegabilmente proprio dalla tua panchina, devasta la pineta di Fara in Sabina dove la avevi temporaneamente piazzata.' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },
]
},

{
id: 5,
text: 'La tua scelta futuristica non è stata compresa: la tua panchina viene ritirata col mastello della plastica.' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },
]
},

{
id: 6,
text: 'Durante i sopralluoghi, un abitante di Canneto ti rincorre pensando tu voglia rifare per la terza volta la piazza. Fuggi e perdi la panchina.' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },
  {
    text: 'Recupera la panchina',
    nextText: 8
  },
]
},

{
id: 7,
text: 'Sembra una buona idea. Vai al negozio di vernici, ma la vernice arcobaleno super scintillante è finita. In alternativa ti propongono una serie di avanzi di vernice, fermi lì da anni perché non c\'è l\'isola ecologica.' ,
options: [
  {
    text: 'Prendo gli avanzi',
    nextText: 9
  },
  {
    text: 'Cambio negozio',
    nextText: 10
  },
]
},

{
id: 8,
text: 'Lo stesso abitante di Canneto ti raggiunge e ti fa assaggiare la panchina sui denti. Stavolta te la sei cercata, eh?' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },
]
},

{
id: 9,
text: 'Chi si accontenta gode, no?' ,
options: [
  {
    text: 'Organizzo la festa di inaugurazione',
    nextText: 11
  },
  {
    text: 'Scelgo un posto per installare la panchina.',
    nextText: 6
  },
]
},

{
id: 10,
text: 'Mentre fai per andare via, il negoziante ti propone una ricercatissima vernice glitterata a metà prezzo. ' ,
options: [
  {
    text: 'Accetto',
    nextText: 9
  },

]
},

{
id: 11,
text: 'La tua sarà una bellissima festa, anche se non sai ancora dove andrà la panchina, ma soprattutto ti serve un testimonial. Chi chiami?' ,
options: [
  {
    text: 'La Sindaca',
    nextText: 12
  },

  {
    text: 'il Presidente del Consiglio Comunale',
    nextText: 13
  },

  {
    text: 'Un commerciante a caso',
    nextText: 14
  },

]
},

{
id: 12,
text: 'Sfortunatamente, la Sindaca ha già degli impegni per il giorno della festa e non potrà partecipare. A dire il vero, sarà impegnata per qualsiasi giorno, in qualsiasi mese, di qualsiasi anno.' ,
options: [
  {
    text: 'Chiamo il Presidente del Consiglio Comunale',
    nextText: 13
  },
  {
    text: 'Chiamo un commerciante a caso',
    nextText: 14
  },
]
},

{
id: 13,
text: 'Sembra una persona accondiscendente, ma quando capisce che non si tratta di una offerta per luce e gas... ti attacca il telefono in faccia.' ,
options: [

  {
    text: 'Chiamo un commerciante a caso',
    nextText: 14
  },
]
},

{
id: 14,
text: 'Dopo qualche telefonata, finalmente trovi un negoziante che vuole patrocinare la tua festa, e per giunta lo trova un gesto normalissimo. Ti commuovi.' ,
options: [

  {
    text: 'Scelgo un posto.',
    nextText: 15
  },
]
},

{
id: 15,
text: 'Dopo attenta selezione, ti trovi alcune alternative. Attenzione a cosa scegli!' ,
options: [

  {
    text: 'Canneto',
    nextText: 6
  },

  {
    text: 'Talocci',
    nextText: 16
  },

  {
    text: 'Fara capoluogo',
    nextText: 17
  },

  {
    text: 'Prime Case',
    nextText: 18
  },

  {
    text: 'Campo Maggiore',
    nextText: 19
  },
]
},

{
id: 16,
text: 'L\'unico posto disponibile a Talocci è presso il campo sportivo. Prima ancora della festa inaugurale, la panchina viene inghiottita dalle erbacce e non riesci più a trovarla.' ,
options: [

  {
    text: 'Ricomincia',
    nextText: -1
  },

  {
    text: 'Abbandona',
    nextText: 98
  },
]
},

{
id: 17,
text: 'Hai scelto veramente un bel posto, ma durante il trasporto il tuo furgone viene inghiottito da una voragine a Prime Case. La cosa buona è che hai riparato una buca!' ,
options: [

  {
    text: 'Ricomincia',
    nextText: -1
  },

  {
    text: 'Abbandona',
    nextText: 98
  },
]
},

{
id: 18,
text: 'Gli abitanti di Prime Case ospitano volentieri la tua panchina. Nella notte, però, viene letteralmente inghiottita da una voragine. Si scopre infine che la voragine fa parte di un sistema esteso di grotte, e un\'iniziativa popolare permette di far nascere "Prime Case Sotterranea", una iniziativa turistica di un certo successo.' ,
options: [

  {
    text: 'Ricomincia',
    nextText: -1
  },

  {
    text: 'Abbandona',
    nextText: 98
  },
]
},

{
id: 19,
text: 'Il posto assegnato è esattamente a ridosso del ponte che va verso Acquaviva. Riesci a scaricare la panchina, ma il furgone non riesce a fare più manovra e resta incastrato. Nessuno potrà mai più raggiungerla e sarà in futuro conosciuta come "la panchina nella roccia".',
options: [

  {
    text: 'Ricomincia',
    nextText: -1
  },

  {
    text: 'Abbandona',
    nextText: 98
  },
]
},

{
id: 99,
text: 'E così, hai già capito che installare una panchina arcobaleno a Fara in Sabina... è più difficile del previsto. Ti rimetti a dormire e pensi che, in fondo, tutto passa: anche le amministrazioni comunali. E ricorda: dopo la pioggia, c\'è sempre un arcobaleno!' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },

]
},

{
id: 98,
text: 'Ecco, adesso hai capito che effettivamente, installare una panchina arcobaleno a Fara in Sabina è più difficile del previsto. Le situazioni e le ambientazioni di questo gioco sono grottesche, ma il problema è reale ed attuale.' ,
options: [
  {
    text: 'Ricomincia',
    nextText: -1
  },

]
},


]

startGame()
