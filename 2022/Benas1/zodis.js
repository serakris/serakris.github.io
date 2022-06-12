// Visuotiniai kintamieji

var suklydimai = 0;

// Turinio keitimas

function turinio_keitimas()
{

}

// Raidziu zymejimas

function divclick(id)
{
	var elem = document.getElementById(id);
  if(elem.classList.contains("selected"))
  		elem.classList.remove("selected");
  else if(!elem.classList.contains("panaudota"))
      elem.classList.add("selected");
}

// Tikrinti

function tikrinti()
{
    var elems = document.getElementsByClassName("selected");
    var klaida = false;
    var audioBlogai = new Audio("blogai.mp3");
    var audioGerai = new Audio("gerai.mp3");
    var zodis;
    if(elems.length == 0)
        klaida = true;
    else
    {
        zodis = elems[0].getAttribute("zodis");
        if(zodis)
        {
            console.log(zodis);
            if(elems.length == zodis.length)
            {
                for(var i = 1; i < elems.length; i++)
                {
                    if(elems[i].getAttribute("zodis") != zodis)
                        klaida = true;
                }
            }
            else
                klaida = true;
        } 
        else
            klaida = true;
    }

    if(klaida)
    {
        audioBlogai.play();
        audioBlogai.currentTime=0;
        suklydimai++;
        while(elems.length > 0)
        {
            elems[0].classList.add("blogai");
            elems[0].classList.remove("selected");
            setTimeout(nuimti, 1001);
        }
        document.getElementById("suklydimas").innerHTML =
        "Suklydimai:    " + suklydimai;
        return;
    }

    audioGerai.play();
    audioGerai.currentTime=0;
    document.getElementById("z_"+zodis).classList.add("tinka");

    while(elems.length > 0)
    {
        elems[0].classList.add("panaudota");
        elems[0].classList.remove("selected");
    }

    if(pabaiga())
    {
        timerisAktyvus = false;
        alert("Suradote visus žodžius!")
    }
}

// Garsas paclickinus

function garsas()
{
    var audioClick = new Audio("pazymeta.mp3");
    audioClick.play();
    audioClick.currentTime=0;
}

// Atžymėjimas

function atzymeti()
{
    var elem = document.getElementsByTagName("td");
    for(var i = 0; i < elem.length; i++)
    {
        if(elem[i].classList.contains("selected"))
        {
            elem[i].classList.remove("selected");
        }
    }
    var audioClick = new Audio("pazymeta.mp3");
    audioClick.play();
    audioClick.currentTime=0;
}

// Nunulinimas

function nunulinimas()
{
    var elem = document.getElementsByTagName("td");
    var zodziai = document.getElementsByClassName("zodis");
    for(var i = 0; i < elem.length; i++)
    {
        if(elem[i].classList.contains("selected"))
        {
            elem[i].classList.remove("selected");
        }
        if(elem[i].classList.contains("panaudota"))
        {
            elem[i].classList.remove("panaudota");
        }
    }
    document.getElementById('stopwatch').innerHTML = "00:00";
    min = 0;
    sek = 0;
    timerisAktyvus = true;

    for(var e of zodziai)
        if(e.classList.contains("tinka"))
            e.classList.remove("tinka");

    suklydimai = 0;
    document.getElementById("suklydimas").innerHTML = "Nesuklysta nė karto";
    document.getElementById("rekordas").innerHTML = "";
}

// Animacijos stiliaus nuėmimas

function nuimti()
{
    var elems = document.getElementsByClassName("blogai");
    while(elems.length > 0)
    {
        elems[0].classList.remove("blogai");
    }
}

// Zaidimo eiga

function pabaiga()
{
    var raides = document.getElementsByTagName("td");
    console.log(raides);
    
    for(var i = 0; i < raides.length; i++)
    {
        if(raides[i].hasAttribute("zodis") && !raides[i].classList.contains("panaudota"))
        {
            return false;
        }
    }
    return true;
}

// Chronometras   
var min = 0;
var sek = 0;
var timerisAktyvus = true;
var rekordas_min = 99;
var rekordas_sek = 99;

function chronometras()
{
    var timer = document.getElementById('stopwatch');

    min = parseInt(min);
    sek = parseInt(sek);

    if(timerisAktyvus)
        sek++;
    
    if(sek == 60)
    {
        min ++;
        sek = 0;
    }

    if(sek == 0 || sek < 10)
    {
        sek = '0' + sek;
    }

    if(min == 0 || min < 10)
    {
        min = '0' + min;
    }

    timer.innerHTML = min + ":" + sek;

    setTimeout(chronometras, 1000);
}

// Laiko rekordai


/*function rekordas()    
{    
    if(min < rekordas_min)
    {
        rekordas_min = min;
        rekordas_sek = rekordas_sek;
        document.getElementById("rekordas").innerHTML =
            "Naujas rekordas!<br>" + min + " min. " + sek + " sek. ";
    }
    if(min == 0)
    {
        if(sek < rekordas_sek)
        {
            rekordas_sek = sek;
            document.getElementById("rekordas").innerHTML =
            "Naujas rekordas!<br>" + sek + " sek. ";
        }
        else{
            document.getElementById("rekordas").innerHTML =
            "Deja, bet nepagerinote savo rekordo.";
        }
    }
    else{
        document.getElementById("rekordas").innerHTML =
        "Deja, bet nepagerinote savo rekordo";
    }    
}
*/
