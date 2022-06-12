//import { ZodziaiBIG } from "/script2.js";
let Zodziai = [100000];
let maxindex = 100000;

let map1 = new Map();
let mapL = new Map();

let MinVal = 99, MaxVal = 0;
let abcM = 
[
    'a', 'ą', 'b', 'c', 'č', 'd', 'e', 'ę', 'ė', 'f', 'g', 'h', 'i', 'į', 'y', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 't', 'u', 'ų', 'ū', 'v', 'z', 'ž'
];
let abcD = 
[
    'A', 'Ą', 'B', 'C', 'Č', 'D', 'E', 'Ę', 'Ė', 'F', 'G', 'H', 'I', 'Į', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ų', 'Ū', 'V', 'Z', 'Ž'
];
let map_skToR = new Map();
let map_rToSk = new Map();

let P_Raid_nr = [40];
let PanaudotosRaides = [40];

let raides = document.getElementsByClassName("raide");
let raidestxt = document.getElementsByClassName("raide_tekstas");
let raides_container = document.getElementById("zodis");

let InputField = document.getElementById("input");
let Input_txt = document.getElementsByClassName("simple_textB");

let ErrorText = document.getElementById("Ilgis_error");

let ArYra_R = document.getElementById("kl_1");
let Patv_R = document.getElementById("kl_2");
let p_txt = document.getElementById("kl_text2");
let p_button = document.getElementById("ats_button_p");
let I_button = document.getElementById("ats_button_I");
let ask_txt = document.getElementById("kl_text1");

let LastQ_R = document.getElementById("kl_3");
let Null_R = document.getElementById("kl_4");
let Last_R = document.getElementById("kl_5");
let Restart_button = document.getElementById("buttonL");
let Ask_txt = document.getElementById("kl_text3");
let Confirm_txt = document.getElementById("kl_text5");

let ClickState;
let Solved = false;

window.onload = function()
{
    Setup();
};
function Setup ()
{
    ClickState = false;
    for (let i = 0; i < raides.length; i++)
    {
        raides[i].style.display = 'none';
    }
    InputField.style.visibility = 'visible';
    Input_txt[0].style.visibility = 'visible';
    
    ErrorText.style.display = 'none';
    raides_container.style.display = 'none';
    LastQ_R.style.display = 'none';
    Null_R.style.display = 'none';
    Last_R.style.display = 'none';
    Restart_button.style.display = 'none';

    for (let i = 0; i < 40; i++)
    {
        P_Raid_nr[i] = "X";
        PanaudotosRaides[i] = false;
    }
    for (let i = 0; i < abcM.length; i++)
    {
        map_skToR.set(i, abcD[i]);
        map_rToSk.set(abcM[i], i);
        map_rToSk.set(abcD[i], i);
    }
    ArYra_R.style.display = 'none';
    Patv_R.style.display = 'none';
    ArYra_R.style.display = 'none';
    Patv_R.style.display = 'none';

    let ltx = ['X', 'x', 'Q', 'q', 'W', 'w', ' '];
    let index = 0;
    let lastword = "";
    let mapW = new Map();
    let mapLx = new Map();
    for (let i = 0; i < ltx.length; i++)
    {
        mapLx.set(ltx[i], true);
    }
    for (let i = 0; i < ZodziaiBIG.length; i++)
    {
        lastword = "";
        for (let j = 0; j < ZodziaiBIG[i].length; j++)
        {
            let l1 = Number(map_rToSk.get(ZodziaiBIG[i][j]));
            if (l1 != undefined && map_rToSk.get(ZodziaiBIG[i][j]) != null && mapLx.get(ZodziaiBIG[i][j]) != true) lastword += map_skToR.get(l1);
        }
        Zodziai[index] = lastword;
        index++;
       
        if((lastword.length < 4 && index > 0) || mapW.get(lastword))
        {
            index--;
        }
        else if(lastword.length < MinVal)
        {
            MinVal = lastword.length;
        }
        else if(lastword.length > MaxVal)
        {
            MaxVal = lastword.length;
        }
        mapW.set(lastword, true);
        maxindex = index;    
    }
    SetVis(true);  

}
function SetVis (bool)
{
    let txt1;
    if (bool == true) txt1 = 'visible';
    else txt1 = 'hidden';
    
    let zodis = document.getElementById("zodis");
    zodis.style.visibility = txt1;
    raides_container.style.visibility = txt1;

    InputField.style.visibility = txt1;
    Input_txt[0].style.visibility = txt1;

    ErrorText.style.visibility = txt1;

    ArYra_R.style.visibility = txt1;
    Patv_R.style.visibility = txt1;
    p_txt.style.visibility = txt1;
    p_button.style.visibility = txt1;
    I_button.style.visibility = txt1;
    ask_txt.style.visibility = txt1;
    LastQ_R.style.visibility = txt1;
    Null_R.style.visibility = txt1;
    Last_R.style.visibility = txt1;
    Restart_button.style.visibility = txt1;
    Ask_txt.style.visibility = txt1;
    Confirm_txt.style.visibility = txt1;
}

window.StartGame = function ()
{
    let RaidziuSkaicius = document.getElementById("RaidziuSkaicius").value;
    ErrorText.style.display = "block";
    SudeliokZodziusPagalIlgi();
    console.log(Number(RaidziuSkaicius));
    if (Number(RaidziuSkaicius) < MinVal)
    {
        console.log(MinVal);
        ErrorText.innerHTML = "Raidžių skaičius per mažas!";
        return;
    }
    if (Number(RaidziuSkaicius) > MaxVal)
    {
        ErrorText.innerHTML = "Raidžių skaičius per didelis!";
        return;
    }
    if (Number(mapL.get(Number(RaidziuSkaicius)) == 0))
    {
        ErrorText.innerHTML = "Netinkamas raidžių skaičius!";
        return;
    }
    let indx = 0;
    for (let i = 0; i < maxindex; i++)
    {
        if (Zodziai[i].length == Number(RaidziuSkaicius))
        {
            Zodziai[indx] = Zodziai[i];
            indx++;
        }
    }
    maxindex = indx - 1;
    
    if (maxindex == 0)
    {
        ErrorText.innerHTML = "Netinkamas raidžių skaičius!";
        return;
    }
    ErrorText.style.display = "none";
    console.log("Rasta " + (maxindex + Number(1)) + " sąlygas atitinkančių žodžių");

    SetDisplay(Number(RaidziuSkaicius))
    Solve();
}
function SetDisplay (nr)
{

    InputField.style.display = 'none';
    Input_txt[0].style.display = 'none';

    raides_container.style.display = 'block';
    raides_container.style.height = '70px';
    raides_container.style.display = 'flex';
    raides_container.style.width = 10 + (nr*80) + 'px';
    
    for (let i = 0; i < nr; i++)
    {
        raides[i].style.display = 'block';
        raidestxt[i].style.display = 'block';
        raidestxt[i].innerHTML = "";
    }
}

function SudeliokZodziusPagalIlgi ()
{
    for(let i = 0; i < abcM.length; i++)
    {
        mapL.set(i, 0);
    }
    for (let i = 0; i < maxindex; i++)
    {
        mapL.set(Zodziai[i].length - 1, mapL.get(Zodziai[i].length - 1) + 1);
    }
}

function Simulate ()
{
    let GalimiVariantai = new Map();
    let mn = 9999999;
    let bestL;
    for(let i = 0; i < abcD.length; i++)
    {
        if (PanaudotosRaides[map_rToSk.get(abcD[i])] == true) continue;
        GalimiVariantai = new Map();
        let mx = 0;
        for (let j = 0; j < maxindex; j++)
        {
            let z = "";
            for(let k = 0; k < Zodziai[j].length; k++)
            {
                if (Zodziai[j][k] == abcD[i])
                {
                    z += abcD[i];
                }
                else z += P_Raid_nr[k];
            }
            if (GalimiVariantai.get(z) == undefined) GalimiVariantai.set(z, 1);
            else GalimiVariantai.set(z, GalimiVariantai.get(z) + 1);
            if (GalimiVariantai.get(z) > mx) mx = GalimiVariantai.get(z);
            
        }
        if (mx < mn)
        {
            mn = mx;
            bestL = i;
        }
    }
    
    return bestL;
     
}

function RaskRaidziuKieki ()
{
    for(let i = 0; i < abcM.length; i++)
    {
        map1.set(abcD[i], 0);
    }
    for (let i = 0; i < maxindex; i++)
    {
        for(let j = 0; j < Zodziai[i].length; j++)
        {
            map1.set(Zodziai[i][j], map1.get(Zodziai[i][j]) + 1);
        }
    }
    let bestR = 0;
    let bestval = 0;
    
    for(let i = 0; i < abcM.length; i++)
    {
        if (map1.get(abcD[i]) > bestval && !PanaudotosRaides[map_rToSk.get(abcD[i])])
        {
            bestval = map1.get(abcD[i]);
            bestR = i;
        }
    }
    return bestR;
}

function IsmeskNetinkamusZodzius ()
{
    let maxindex2 = 0;
    for (let i = 0; i < maxindex; i++)
    {
        let IsOK = true;
        for(let j = 0; j < Zodziai[i].length; j++)
        {
            if (P_Raid_nr[j] == 'X' && PanaudotosRaides[map_rToSk.get(Zodziai[i][j])])
            {
                IsOK = false;
                break;
            }
            if (P_Raid_nr[j] != 'X' && P_Raid_nr[j] != Zodziai[i][j])
            {
                IsOK = false;
                break;
            }
        }
        if (IsOK)
        {
            Zodziai[maxindex2] = Zodziai[i];
            maxindex2++;
        }
    }
    maxindex = maxindex2;
    if (maxindex < 10)
    {
        for (let i = 0; i < maxindex; i++)
        {
            console.log(Zodziai[i]);
        }
    }
    console.log("Rasta " + maxindex + " sąlygas atitinkančių žodžių");
    
}




let bestR;
let Raides_u = [40];
window.Raide = function (R)
{
    if (!ClickState) return;
    if (P_Raid_nr[R] != 'X')
    {
        return;
    }
    Raides_u[R] = true;
    I_button.style.display = 'block';
    raidestxt[R].innerHTML = map_skToR.get(bestR);
    P_Raid_nr[R] = map_skToR.get(bestR);
    p_button.style.display = 'block';
}

function Solve ()
{
    //bestR = RaskRaidziuKieki();
    bestR = Simulate();
    PanaudotosRaides[bestR] = true;
    KlauskZmogaus1(bestR);
}

function KlauskZmogaus1 (R)
{
    ArYra_R.style.display = 'block';
    ask_txt.innerHTML = "Ar jūsų žodyje yra raidė " + map_skToR.get(R) + "?";
}

window.Atsakymas = function(bool)
{
    if (bool)
    {
        if (!Solved) ClickState = true;
        for (let i = 0; i < 40; i++) Raides_u[i] = false;
        Patv_R.style.display = 'block';
        p_button.style.display = 'none';
        I_button.style.display = 'none';
        ArYra_R.style.display = 'none';
        p_txt.innerHTML = "Pažymėkite visas vietas, kur jūsų žodyje yra raidė  " + map_skToR.get(bestR) + ".";
    }
    else
    {
        ArYra_R.style.display = 'none';
        Patvirtinti ();
    }
}
window.Patvirtinti = function()
{
    ClickState = false;
    Patv_R.style.display = 'none';
    IsmeskNetinkamusZodzius ();
    if (maxindex == 0)
    {
        console.log("Žodis nerastas");
        NoWord();
        return;
    }
    if (maxindex == 1)
    {
        console.log("Žodis yra " + Zodziai[0]);
        for (let i = 0; i < Zodziai[0].length; i++)
        {
            if (P_Raid_nr[i] == 'X')
            {
                AskFinal(Zodziai[0]);
                return;
            }
        }
        Confirm(Zodziai[0]);
        return;
    }
    Solve(); 
}
window.Isvalyti = function()
{
    ClickState = true;
    Patv_R.style.display = 'block';
    p_button.style.display = 'none';
    I_button.style.display = 'none';
    for (let i = 0; i < 40; i++)
    {
        if (Raides_u[i] == false) continue;
        Raides_u[i] = false;
        raidestxt[i].innerHTML = "";
        P_Raid_nr[i] = "X";
    }
}


function AskFinal(zod)
{
    LastQ_R.style.display = 'block';
    Ask_txt.innerHTML = "Ar jūsų žodis yra " + zod + "? &#128578";
    
}
function Confirm(zod)
{
    Last_R.style.display = 'block';
    Confirm_txt.innerHTML = "Jūsų žodis yra " + zod + " &#128578";
}
window.NoWord = function()
{
    LastQ_R.style.display = 'none';
    Last_R.style.display = 'none';
    Null_R.style.display = 'block';
}
window.EndGame = function()
{
    LastQ_R.style.display = 'none';
    Last_R.style.display = 'none';
    Restart_button.style.display = 'block';
}
window.Restart = function()
{
    location.reload();
}

