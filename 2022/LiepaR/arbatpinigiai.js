function skaičarbat() {
  var sąskaitaAmt = document.getElementById("sąskaitaamt").value;
  var aptkokybė = document.getElementById("aptkokybė").value;
  var numOfPeople = document.getElementById("žmonėsamt").value;

  if (sąskaitaAmt === "" || aptkokybė == 0) {
    alert("Prašome užpildyti tuščius laukelius");
    return;
  }
  //tikrina ar mažiau/lygu 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("atskirai").style.display = "none";
  } else {
    document.getElementById("atskirai").style.display = "block";
  }

  //skaičiuoja arbatpinigius
  var total = (sąskaitaAmt * aptkokybė) / numOfPeople;
  //apvalina
  total = Math.round(total * 100) / 100;
  //du skaičiai po kablelio
  total = total.toFixed(2);
  //parašo arbatpinigius
  document.getElementById("galutarbat").style.display = "block";
  document.getElementById("arbat").innerHTML = total;

}

//paslepia kodėl??
document.getElementById("galutarbat").style.display = "none";
document.getElementById("atskirai").style.display = "none";

//paspausti norint iškviesti f-ją
document.getElementById("calculate").onclick = function() {
  skaičarbat();

}