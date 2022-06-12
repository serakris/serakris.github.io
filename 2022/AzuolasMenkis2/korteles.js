var arry=["1","2","3","4","1","2","3","4"];
var laikoF=false;
	
let arrayShuffle = function(arr) {
	let pos,
		temp;
	
	for(let i=arr.length - 1; i > 0; i--){
		pos = Math.floor(Math.random()*(i+1));
		temp = arr[i];
		arr[i]=arr[pos];
		arr[pos]=temp;
	}
	return arr;
}

	let naujasMasyvas = arrayShuffle(arry);
console.log(naujasMasyvas);
var tikrinimas=0
var atspeta=0;
var senasNr;
var neteisingi=0;

function atvertimas1(){
	document.getElementById("n1").src=naujasMasyvas[0]+"k.png";
	id="n1";
	masyvoNr=0;
	patikrinimas( masyvoNr,id);
}
function atvertimas2(){
	document.getElementById("n2").src=naujasMasyvas[1]+"k.png";
	id="n2";
	masyvoNr=1;
	patikrinimas( masyvoNr,id);
}
function atvertimas3(){
	document.getElementById("n3").src=naujasMasyvas[2]+"k.png";
	id="n3";
	masyvoNr=2;
	patikrinimas( masyvoNr,id);
}
function atvertimas4(){
	document.getElementById("n4").src=naujasMasyvas[3]+"k.png";
	id="n4";
	masyvoNr=3;
	patikrinimas( masyvoNr,id);
}
function atvertimas5(){
	document.getElementById("n5").src=naujasMasyvas[4]+"k.png";
	id="n5";
	masyvoNr=4;
	patikrinimas( masyvoNr,id);
}
function atvertimas6(){
	document.getElementById("n6").src=naujasMasyvas[5]+"k.png";
	id="n6";
	masyvoNr=5;
	patikrinimas( masyvoNr,id);
}
function atvertimas7(){
	document.getElementById("n7").src=naujasMasyvas[6]+"k.png";
	id="n7";
	masyvoNr=6;
	patikrinimas( masyvoNr,id);
}
function atvertimas8(){
	document.getElementById("n8").src=naujasMasyvas[7]+"k.png";
	id="n8";
	masyvoNr=7;
	patikrinimas( masyvoNr,id);
}
	
function patikrinimas(){
	
	if(tikrinimas>0){
		if(naujasMasyvas[masyvoNr]==naujasMasyvas[senasNr]){
			atspeta++;
			console.log("teisingai");
			tikrinimas=0;
			console.log(senasId);
			setTimeout(() => {document.getElementById(id).style.visibility="hidden";  },800);
			setTimeout(() => {document.getElementById(senasId).style.visibility="hidden";  },800);
			setTimeout(() => {if(atspeta>3) alert("Atspėjai visas korteles!");  },1500);
			
			
		}
		else {
		    tikrinimas=0;
			console.log("neteisingai");
			setTimeout(() => {document.getElementById(id).src="blank.png";  },800);
			setTimeout(() => {document.getElementById(senasId).src="blank.png";  },800);
			neteisingi++;
			document.getElementById("ntsng").innerHTML=neteisingi;
			
		}}
	
	else {
	senasNr=masyvoNr;
	senasId=id;
		console.log(senasId);
	tikrinimas=1;
	}
		
}	
const PradinisLaikas = 30;
let sekundes = PradinisLaikas;
function pradeti(){

laikoF=true;
setInterval(updateLaikas, 1000);

function updateLaikas(){
	sekundes--;
	if(sekundes<0) {return};
	document.getElementById("timeris").innerHTML='Liko '+ sekundes + ' s';
	console.log(sekundes);
	
	if(sekundes==0){
		
		setTimeout(() => {alert("Laikas baigėsi");  },800);

	}}}
if(laikoF==false){
    pradeti();
}
