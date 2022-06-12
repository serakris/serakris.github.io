var x=false,atverstasvienas=false,hello=false,ejimai=0,teisingi=0,laim="url(image/laimejo.jpg)",pralaim="url(image/pralaimejo.jpg)",goodlaim="url(image/superlaim.gif)",superlaim="url(image/superlaims.gif)",pralaims="url(image/bads.gif)",gugugaga=0;
var b,g;//b-issaugo paspausto nuotrauka, g- id paspauto

document.getElementById("vin").style.display = "none";
document.getElementById("board").style.display = "none";
//document.getElementById("board").style.background.color = "white";

function pradek(){
    if (x)window.location.reload();
    document.getElementById("pasirink").style.display = "none";
    document.getElementById("buttonas").style.display = "none";
    document.getElementById("board").style.border = "5px solid";
    document.getElementById("startmenu").style.backgroundColor = "transparent";
    document.getElementById("startmenu").style.border = "transparent";
    pasirinkimas=document.getElementById("pasirinkimas").value;
    if(pasirinkimas==0)ejimai=20;
    else if(pasirinkimas==1)ejimai=3;
    else ejimai=1;
    if(ejimai>9){
        document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymų";
    }
    else if(ejimai>1){
        document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymai";
    }
    else{
        document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymas";
    } 
    x=true;
    var uogos = ["agrastas.jpg", "aviete.jpg", "braske.jpg", "gervuoge.jpg", "melyne.gif", "serbentai.jpg", "spanguoles.gif", "vysnios.jpg","agrastas.jpg", "aviete.jpg", "braske.jpg", "gervuoge.jpg", "melyne.gif", "serbentai.jpg", "spanguoles.gif", "vysnios.jpg"]
    uogos.sort(() => Math.random() - 0.5)   /// išmaisome masyva
    var korteles = [];
    for (var i=0; i<uogos.length; i=i+1)
    {
        var imgEl = document.createElement("img");
        imgEl.src = "image\\" + uogos[i]
        imgEl.alt = "uoga"
        imgEl.id = "uoga" + i
        korteles.push(imgEl)
        document.getElementById("board").appendChild(korteles[i])
    }
    setTimeout(function(){for (var i=0; i<uogos.length; i=i+1)
    {
        korteles[i].src = "image\\blank.jpg";
        hello=true;
    }},3000);//parodo kelias (3) sekundes viska ir uzvercia


    
    korteles.forEach (kortele => {
        //console.log(kortele)
        kortele.addEventListener("click", function() 
        {   
            if(kortele.id.length < 6)var i = kortele.id.slice(kortele.id.length - 1);
            else var i = kortele.id.slice(kortele.id.length - 2);
            if(hello){//paziuri ar galima spausti (nera kitu 2 paspaustu)
            if(korteles[i].src.slice(korteles[i].src.length-9)=="blank.jpg"){//patikrina ar nepaspaustas
                if(!atverstasvienas){//atvercia pirma
                    b="image\\" + uogos[i];
                    atverstasvienas=true;
                    g=kortele.id;
                    kortele.src = "image\\" + uogos[i];
                }
                else if(b=="image\\" + uogos[i]){//patikrina ar antras atitinka pirma ir atitinka
                    atverstasvienas=false;
                    kortele.src = "image\\" + uogos[i];
                    hello=false;
                    setTimeout(function(){
                        document.getElementById(g).src="image\\green.jpg";
                        kortele.src = "image\\green.jpg";
                        hello=true;
                    },500);
                    teisingi++;
                    if(teisingi==8)laimejo();
                }
                else{//patikrina ar antras atitinka pirma ir neatitinka
                    atverstasvienas=false;
                    hello=false;
                    kortele.src = "image\\" + uogos[i];
                    setTimeout(function(){
                        kortele.src = "image\\red.jpg";
                        document.getElementById(g).src="image\\red.jpg";
                    },500);
                    setTimeout(function(){
                        document.getElementById(g).src="image\\blank.jpg";
                        kortele.src="image\\blank.jpg";
                        hello=true;
                        ejimai--;
                        gugugaga++;
                        if(ejimai>9){
                            document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymų";
                        }
                        else if(ejimai>1){
                            document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymai";
                        }
                        else{
                            document.getElementById("moves").innerHTML = "Tau liko "+ejimai+" bandymas";
                        }   
                        if(ejimai==0)pralaimejai();
                    },1000);
            }
            }
            }
    })
    }
    );
}
function laimejo(){
    if(pasirinkimas==2){//super laimejimas
        document.body.style.backgroundImage=superlaim;
        document.getElementById("moves").innerHTML="Tu esi čempionas!";
    }
    else if(gugugaga<=3&&pasirinkimas==1){//geras laimejimas
        document.body.style.backgroundImage=goodlaim;
        document.getElementById("moves").innerHTML="Laimejai! Tu beveik čempionas.";
    }
    else{//lievas laimejimas
        document.getElementById("moves").innerHTML="Laimėjai!";
        document.body.style.backgroundImage=laim;
    }
    
    document.getElementById("board").style.display = "none";
    document.getElementById("buttonas").style.display = "block";
    document.getElementById("buttonas").innerHTML = "Žaisi dar kartą?";
    hello = false;
}
function pralaimejai(){
    if(gugugaga==20){//lievas pralaimejimas
        document.body.style.backgroundImage=pralaims;
        document.getElementById("moves").innerHTML="Labai pralaimėjai!";
        //setTimeout(function(){window.location.reload()},13000);
    }
    else{//pralaimejimas
        document.getElementById("moves").innerHTML="Pralaimejai!";
        document.body.style.backgroundImage = pralaim;
    }
    document.getElementById("board").style.display = "none";
    document.getElementById("buttonas").style.display = "block";
    document.getElementById("buttonas").innerHTML = "Žaisi dar kartą?";
    hello = false;
    
}
