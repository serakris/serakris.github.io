const zodziai = [
    "hola",
    "gato",
    "gracias",
    "uno",
    "amor",
    "adios",
    "libro",
    "casa",
    "boligrafo",
    "rojo",
    "manzana",
    "queso"
];
const scrambledzodz = [
    "lhoa",
    "tago",
    "rgicaas",
    "nou",
    "mora",
    "sioda",
    "birlo",
    "acsa",
    "ilgarfob",
    "oojr",
    "namnaza",
    "uoqse"
];
const hintai =[
    "HINT: labas",
    "HINT: katinas",
    "HINT: ačiū",
    "HINT: vienas",
    "HINT: meilė",
    "HINT: ate",
    "HINT: knyga",
    "HINT: namas",
    "HINT: tušinukas",
    "HINT: raudona",
    "HINT: obuolys",
    "HINT: sūris"
]
var a = Math.floor(Math.random() * scrambledzodz.length);
document.getElementById("zodis").innerHTML = scrambledzodz[a];
document.getElementById("hint").innerHTML = hintai[a];


function speti() {
    var b = document.getElementById("input").value;
    console.log(b);
    if (b === zodziai[a]) {
        document.getElementById("zodis").innerHTML = "Teisingai!";
        document.getElementById("zodis").style.color = "lime";
        document.getElementById("zodis").style.textShadow = "2px 2px 3px green";
    }
    else {
        document.getElementById("zodis").innerHTML = "Neteisingai!";
        document.getElementById("zodis").style.color = "rgb(73, 192, 236)";
        document.getElementById("zodis").style.textShadow = "1px 1px 2px rgb(27, 72, 223)";
    }
}

function isnaujo() {
    location.reload();
}






