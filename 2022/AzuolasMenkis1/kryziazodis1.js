const klausimai=["1.Šalis, kur įvyksta daugiausiai žemės drebėjimų.", "2.Daugiausiai salų turinti šalis.", "3.Šilčiausia šalis pasaulyje.","4.Šalis su daugiausiai aktyvių ugnikalnių.",
	"5.Šalis turinti daugiausiai oficialių kalbų.","6.Kurioje šalyje užauginamas didžiausias kavos kiekis?","7.Labiausiai turistų lankoma šalis.","8.Kur suvalgoma daugiausiai šokolado vienam gyventojui?",
	"9.Daugiausiai ežerų turinti šalis.","10.Mažiausia pasaulio šalis."];
const variantai=["Kinija","Švedija","Malis","Indonezija","Zimbabvė","Brazilija","Prancūzija",
	"Šveicarija","Kanada","Vatikanas",]
let klaidos = 0;
var numeris = 0;
function tikrinimas(){
    var atsakymas = document.getElementById("ats").value;
	console.log(atsakymas);
	document.getElementById('ats').value='';
	   
		if(atsakymas == variantai[numeris]){
		console.log("yes");
			
			numeris=numeris+1;
			document.getElementById("sup"+ numeris).style.visibility= "hidden";
			 var elements = document.getElementsByClassName("div"+ numeris), i, len;
  
  for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.color = "Black";
  }
		if(numeris < 10){ 
		document.getElementById("klausimas").innerHTML = klausimai[numeris];
		}	
		else {console.log("laimejai");
		alert("LAIMĖJAI!!!");}
	}
		
		else klaidos++;
		document.getElementById("klaidos").innerHTML = klaidos;
}
	