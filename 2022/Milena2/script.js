var zodziuPasirinkimas = ['daugiabutis', 'katinas', 'kvadratas', 'mėnulis', 'pieštukai', 'klavišas', 'ąžuolas', 'spąstai', 'medus', 'pienas', 'rugiagėlė', 'mašina', 
'pilis', 'tvartas', 'kiaulė', 'blynai', 'akiniai', 'gertuvė', 'upė', 'briedis', 'šaulys', 'vadovėlis', 'pinigai', 'gimnazija', 'sostinė', 'šparagai', 'pomidorai', 
'apelsinas', 'komoda', 'puota', 'rogės', 'muzika', 'draugas', 'palapinė', 'kompiuteris', 'amfiteatras', 'filharmonija', 'spektaklis', 'filmas', 'dainavimas', 'rokas',
'artumas', 'sausainis', 'jūra', 'mūšis', 'sutartis', 'korys', 'būda', 'košė', 'šaldytuvas', 'ledai', 'rašinys', 'filosofija', 'veikalas', 'argumentas', 'driežas'];
let atsakymas = '';
let klaiduMax = 5;
let padarytosKlaidos = 0;
let speta = [];
let zodzioStatusas = null;


function betkoksZodis() {
  atsakymas = zodziuPasirinkimas[Math.floor(Math.random() * zodziuPasirinkimas.length)];
}

function sugeneruokKlaviatura() {
  let mygtukai = 'aąbcčdeęėfghiyįjklmnoprsštuųūvzž'.split('').map(letter =>
    `
      <button
        class="btn"
        id='` + letter + `'
        onClick="spejimas('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('klaviatura').innerHTML = mygtukai;
}

function spejimas(paspaustaRaide) {
  speta.indexOf(paspaustaRaide) === -1 ? speta.push(paspaustaRaide) : null;
  document.getElementById(paspaustaRaide).setAttribute('disabled', true);

  if (atsakymas.indexOf(paspaustaRaide) >= 0) {
    spetasZodis();
    tikrinkArLaimeta();
  } else if (atsakymas.indexOf(paspaustaRaide) === -1) {
    padarytosKlaidos++;
    atnaujintiKlaidas();
    tikrinkArPralaimeta();
  }
}
function tikrinkArLaimeta() {
  if (zodzioStatusas === atsakymas) {
    document.getElementById('klaviatura').innerHTML = 'Tu laimėjai:)';
  }
}

function tikrinkArPralaimeta() {
  if (padarytosKlaidos === klaiduMax) {
    document.getElementById('zodis').innerHTML = 'Atsakymas buvo: ' + atsakymas;
    document.getElementById('klaviatura').innerHTML = 'Tu pralošei:(';
  }
}

function spetasZodis() {
  zodzioStatusas = atsakymas.split('').map(letter => (speta.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('zodis').innerHTML = zodzioStatusas;
}

function atnaujintiKlaidas() {
  document.getElementById('padarytosKlaidos').innerHTML = padarytosKlaidos;
}

function isNaujo() {
  padarytosKlaidos = 0;
  speta = [];

  betkoksZodis();
  spetasZodis();
  atnaujintiKlaidas();
  sugeneruokKlaviatura();
}

document.getElementById('klaiduMax').innerHTML = klaiduMax;

betkoksZodis();
sugeneruokKlaviatura();
spetasZodis();