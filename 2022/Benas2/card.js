var praeitas = null;
const korteles = 16;
var ejimai = 0;
var poros = 0;

function rand(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function pakeistiTD(td1, td2)
{
    var laik = td1.innerHTML;
    td1.innerHTML = td2.innerHTML;
    td2.innerHTML = laik;
}

function pradeti()
{
    const emoji_str = "💌🔪🏺🧱💈🦽🦼⌛⏳⌚⏰⛱🧨🎈🎉🎎🎏🎐🧧🎀🎁🤿🪀🪁🔮🪄🧿🪬🕹️🧸🪅🪆🖼️🧵🪡🧶🪢🛍️📿💎📯🎙️🎚️🎛️📻🪕📱☎️📞📟📠🔋🔌💻🖥️🖨️⌨️🖱️🖲️💽💾💿📀🧮🎥🎞️📽️📺📷📸📹📼🔎🕯️💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞️📑🔖🏷️💰🪙💴💵💶💷💸💳🧾✉️📧📨📩📤📥📦📫📮🗳️✏️✒️🖋️🖊️🖌️🖍️📝📁📂🗂️📅🗒️🗓️📇📈📉📊📋📌📍📎🖇️📏📐✂️🗃️🗄️🗑️🔒🔑🗝️🔨🪓⛏️🗡️🔫🪃🛡️🪚🔧🪛🔩⚙️🗜️⚖️🦯🔗🪝🧰🧲🪜⚗️🧪🧫🧬🔬🔭📡💉🩸💊🩹🩼🩺🚪🪞🛏️🛋️🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🪥🧽🧯🛒🚬⚰️🪦⚱️🗿🪧🪪🚰";
    var emoji = Array.from(emoji_str);
    
    const tds = document.getElementsByTagName("td");
    for(var td of tds)
    {
        td.classList.add("paslepta");
        td.classList.remove("atslepta");
        td.classList.remove("nieko");
    }

    for(var i = 0; i < korteles / 2; i++)
    {
        var td = document.getElementById("td"+ i);
        td.textContent = emoji[i];
        td = document.getElementById("td"+ (i + korteles / 2));
        td.textContent = emoji[i];
    }

    for(var i = 0; i < 20; i++)
    {
        const a = "td" + rand(0, korteles);
        const b = "td" + rand(0, korteles);
        if(a != b)
        {
            pakeistiTD(document.getElementById(a), document.getElementById(b));
        }
    }

    paleistas = true;
    min = 0;
    sek = 0;
    ejimai = 0;
    poros = 0;
    document.getElementById("ejimai").innerHTML = ejimai + " ėjimų";  
}

function paspaudimasTD(elem)
{
    if(elem.classList.contains("paslepta"))
    {
        ejimai++;
        document.getElementById("ejimai").innerHTML = ejimai + " ėjimų";  
        elem.classList.remove("paslepta");
        if(praeitas)
        {
            if(praeitas.innerHTML == elem.innerHTML)
            {
                praeitas.classList.add("atslepta");
                elem.classList.add("atslepta");
                praeitas = null;
                poros++;
                if(poros == korteles / 2)
                {
                    document.getElementById("ejimai").innerHTML = "Laimėjote!";
                    paleistas = false;
                }
            }
            else
            {
                praeitas.classList.add("paslepta");
                praeitas = elem;
            }
        }
        else
        {
            praeitas = elem;
        }
    }
}

var min = 0;
var sek = 0;
var paleistas = false;


function chronometras()
{
    var timer = document.getElementById('laikas');

    sek = parseInt(sek);
    min = parseInt(min);

    if(paleistas)
    {
        sek++;
    }
    
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

