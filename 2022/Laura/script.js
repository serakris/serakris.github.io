// document.body.innerHTML = "Valio!"

function spindulys()
{
    var b = document.getElementById("spindulys").value;
    console.log(b);
    var ats;
    if (isNaN(b))
    {
        ats = "Neteisinga įvestis";
    }
    else 
    {
        ats = 2*3.14*b;
    }
    document.getElementById("ats11").innerHTML = ats;
    if (isNaN(b))
    {
        ats = "Neteisinga įvestis";
    }
    else 
    {
       ats = b*b*3.14;
    }
    document.getElementById("ats12").innerHTML = ats;
}
/* var sk = document.getElementById("skaicius"); 
console.log(sk);
sk.innerHTML = 0;

function atimtis()
{
    sk.innerHTML = Number(sk.innerHTML) - 1;
}
function nuonulio()
{
    sk.innerHTML = 0;
}
*/
function atsakymas2()
{
    var sk = document.getElementById("ats2"); 
console.log(sk);
    sk.innerHTML = 'B';
}
function kvadratinelygtis()
{
    var a = document.getElementById("lygtis").value;
    console.log(a);
    var ats;
    if (isNaN(a))
    {
        ats = "Neteisinga įvestis";
    }
    else if (a==2 || a==3)
    {
     //   var ats3 = document.getElementById("ats3").value;
      //  console.log(ats3);
        ats= "Teisingai";
    }
    else if(a!=2 && a!=3)
    {
        ats="Neteisingai";
    }
    document.getElementById("ats3").innerHTML = ats;
}