var zodis = "";
var visi;
var eilNr = 0;
document.getElementById("visas").style.visibility="hidden";

function generuok()
{
    visi=['anise', 'apple', 'aspic', 'bacon', 'bagel', 'basil', 'beans', 'berry', 'bland', 'bread', 'broil', 'candy', 'cater', 'chard', 'chili', 'chips', 'cream', 'crepe', 'crisp', 'cumin', 'curds', 'curry', 'dairy', 'dates', 'diner', 'dough', 'feast', 'flour', 'fries', 'fruit', 'fudge', 'grape', 'guava', 'herbs', 'honey', 'jelly', 'icing', 'juice', 'kebab', 'lemon', 'mango', 'melon', 'mints', 'mochi', 'olive', 'onion', 'pasta', 'peach', 'pecan', 'pilaf', 'pizza', 'prune', 'salad', 'salsa', 'sauce', 'seeds', 'snack', 'spork', 'squid', 'steak', 'sugar', 'sushi', 'syrup', 'taost', 'torte', 'wafer', 'water', 'wheat', 'yeast'];
    zodis=visi[Math.floor(Math.random()*visi.length)];
    //document.getElementById("ats").innerHTML = zodis;
    //window.location.reload();
    document.getElementById("visas").style.visibility="visible";
}

function tikrink()
{
    var lent=document.getElementById("lentele1");
    var tusciuKiekis = 0;
    var raides = 0;
    var teisingai = 0;
    var ivestasZodis = "";
    var r1;
    var radom = false;
    //document.getElementById("atsakymas").innerHTML = raides;
    for (let i=0; i<5; i++)
    {
        r1=lent.rows[eilNr].cells[i].childNodes[1];
        raides = zodis.search(r1.value[0]);
        ivestasZodis = ivestasZodis + r1.value;
        if(r1.value=="")
            {
                tusciuKiekis=tusciuKiekis+1;
            }
    }
    if(tusciuKiekis>0)
    {
        document.getElementById("ats").innerHTML = "nepalik tuščių langelių";
    } 
    for(let i=0; i<visi.length; i++)
    {
        if(ivestasZodis==visi[i])
        {
            radom = true;
        }
    }   
    //document.getElementById("tikrinimas").innerHTML = radom;
    if(radom)
    {
        for (let i=0; i<5; i++)
        {
            r1=lent.rows[eilNr].cells[i].childNodes[1];
            if(r1.value[0] == zodis[i]) 
            {
                r1.style.backgroundColor="green";
                teisingai = teisingai+1;
                let r2 = document.getElementById(r1.value + r1.value );
                r2.style.backgroundColor="green";
    
            }
            else if(raides==-1)
            {
                r1.style.backgroundColor="grey";
                let r2 = document.getElementById(r1.value + r1.value );
                r2.style.backgroundColor="grey";
            }
            else
            {
                r1.style.backgroundColor="yellow";
                let r2 = document.getElementById(r1.value + r1.value );
                r2.style.backgroundColor="yellow";
            }
            r1.readOnly=true;
        }
    }
    else 
    {
        document.getElementById("tikrinimas").innerHTML = "įvestas žodis turi egzistuoti!";
    }
    if(teisingai==5)
    {
        document.getElementById("atsakymas").innerHTML = "VALIOOOOO";
    }
   // document.getElementById("atsakymas").innerHTML = raides;
    else if(tusciuKiekis==0)
    {
        eilNr ++;
        lent.rows[eilNr].style.backgroundColor="beige";
    }

}

