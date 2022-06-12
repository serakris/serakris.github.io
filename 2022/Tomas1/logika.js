
var Lenta = [9];
var ejimas = 0;
var player;
var gameover = 0;
var MovesDone = 0;
var ShowCalcVal = 0;

/*
0 - langelis tuščias
1 - langelis užimtas kompiuterio
2 - langelis užimtas žmogaus
*/

//Funkcija paleidžiama, kai perkraunamas langas
window.onload = function() 
{
    ResetBoard();
    DisplayButtons();
    UpdateBoard();
};

function ResetBoard ()
{
    for (var i = 0; i < 9; i++)
    {
        Lenta[i] = 0;
    }
}
var X = document.getElementsByClassName("imgX");
var Y = document.getElementsByClassName("imgY");
var CalcVal = document.getElementsByClassName("CalcVal");

function Start (pradeda_zmogus)
{
    gameover = 0;
    ResetBoard();
    UpdateBoard();
    ejimas = pradeda_zmogus;
    player = pradeda_zmogus;
    CheckWin();
    ShowStartButtons(0);
    if (ShowCalcVal == 1)
    {
        for (var i = 0; i < 9; i++)
        {
            if (Lenta[i] == 0) CalcVal[i].style.display = "block";
            CalcVal[i].innerHTML = "-";
        }
    } 
    if (pradeda_zmogus == 1) MovePlayerBegin();
    else Move_PC();
}

var StartButtons = document.getElementsByClassName("StartButton");
function ShowStartButtons (v)
{
    for (var i = 0; i < StartButtons.length; i++)
    {
        if (v == 1) StartButtons[i].style.visibility = "";
        else StartButtons[i].style.visibility = "hidden";
    }
}

function UpdateBoard ()
{
    for (var i = 0; i < 9; i++)
    {
        X[i].style.display = "none";
        Y[i].style.display = "none";
        if (Lenta[i] == 1)
        {
            if (player == 1) Y[i].style.display = "block";
            else X[i].style.display = "block";
            CalcVal[i].style.display = "none";
        }
        else if (Lenta[i] == 2)
        {
            if (player == 1) X[i].style.display = "block";
            else Y[i].style.display = "block";
            CalcVal[i].style.display = "none";
        }

    }
}
var Buttons = document.getElementsByClassName("button1");

function DisplayButtons ()
{
    for (var i = 0; i < 9; i++)
    {
        if (Lenta[i] == 0) Buttons[i].style.display = "block";
        else Buttons[i].style.display = "none";
    }
    if (ShowCalcVal != 1)
    {
        for (var i = 0; i < 9; i++)
        {
            CalcVal[i].style.display = "none";
        }
    }
}
function ShowVal ()
{
    var cb = document.getElementById("checkval");
    ShowCalcVal = cb.checked;
    for (var i = 0; i < 9; i++)
    {
        if (Lenta[i] == 0) CalcVal[i].style.display = "block";
        CalcVal[i].innerHTML = "-";
    }
    DisplayButtons();
}

var WinnerSets = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*
-1 - lygiosios
0 - žaidimas nebaigtas
1 - laimėjo kompiuteris
2 - laimėjo žmogus
*/
function FindWinner (L)
{
    for (var i = 0; i < WinnerSets.length; i++)
    {
        var c = 0;
        for (var j = 0; j < 3; j++)
        {
            if (L[WinnerSets[i][j]] == 2) c++;
        }
        if (c == 3) return 2;

        c = 0;
        for (var j = 0; j < 3; j++)
        {
            if (L[WinnerSets[i][j]] == 1) c++;
        }
        if (c == 3) return 1;
    }
    for (var i = 0; i < 9; i++)
    {
        if (L[i] == 0) return 0;
    }
    return -1;
}
var Wintxt = document.getElementById("WinText");
function CheckWin ()
{
    var x = FindWinner(Lenta);
    if (x == 0)
    {
        gameover = 0;
        Wintxt.innerHTML = "Paspauskite tuščią langelį";
    }
    else
    {
        gameover = 1;
        ShowStartButtons(1);
        if (x == -1)
        {
            Wintxt.innerHTML = "Lygiosios!";
        }
        if (x == 1)
        {
            Wintxt.innerHTML = "Laimėjo kompiuteris!";
        }
        if (x == 2)
        {
            Wintxt.innerHTML = "Laimėjo Žmogus!";
        }
    }
}
var canmove = 0;
function MovePlayerBegin ()
{
    DisplayButtons();
    canmove = 1;    
}
function MovePlayerEnd (m)
{
    if (!canmove) return;
    canmove = 0;
    if (Lenta[m] != 0) MovePlayerBegin();
    else Lenta[m] = 2;
    DisplayButtons();
    UpdateBoard();
    CheckWin();
    MovesDone++;
    if (gameover == 0) Move_PC();
}
//Skaičiuojamas optimalus kompiuterio ėjimas
function Move_PC ()
{
    canmove = 0;
    DisplayButtons();
    var move2 = FindWinnerMove(Lenta);
    var move = FindBestMove(Lenta);
    if (move2 != null)
    {
        move = move2;
    }
    Lenta[move] = 1;
    UpdateBoard();
    DisplayButtons();
    MovesDone++;
    if (ShowCalcVal == 1) CalcVal[move].style.display = "block"; 
    CheckWin();
    if (gameover == 0) MovePlayerBegin();
}

//Funkcija gražina langelį (jei toks yra), kuriame kompiuteris garantuotai laimi
function FindWinnerMove (L)
{
    for (var i = 0; i < WinnerSets.length; i++)
    {
        var v = [3];
        var k = 0;
        for (var j = 0; j < 3; j++)
        {
            if(L[WinnerSets[i][j]] == 1)
            {
                k++;
                v[j] = true;
            }
            else if(L[WinnerSets[i][j]] == 0) v[j] = false;
            else
            {
                k = 0;
                break;
            }
        }
        if (k == 2)
        {
            for (var j = 0; j < 3; j++)
            {
                if(!v[j])
                {
                    return WinnerSets[i][j];
                }
            }  
        }
    }
    return;
}

//Funkcija randa optimaliausią ėjimą kompiuteriui
function FindBestMove (L)
{
    var max = -99999;
    var AvailableMoves = [];
    for (var i = 0; i < 9; i++)
    {
        if (L[i] == 0)
        {
            L[i] = 1;
            var mxL = Min(L);
            if (mxL == max)
            {
                AvailableMoves.push(i);
            }
            if (mxL > max)
            {
                AvailableMoves = [];
                AvailableMoves.push(i);
                max = mxL;
            }
            CalcVal[i].innerHTML = mxL;
            L[i] = 0;
        }
    }
    //Jei yra keli galimi ėjimai, iš jų išrenkamas atsitiktinis
    var rnd = Math.floor(Math.random() * AvailableMoves.length);
    return AvailableMoves[rnd];
}

function Convert (k)
{
    if (k == 2) return -1;
    if (k == 1) return 1;
    if (k == -1) return 0;
    return;
}

//MinMax algoritmas - rekursiškai pereina per visus galimus variantus
//Funkcija suskaičiuoja patį geriausią potencialų žmogaus ėjimą, kuris nepalankiausias kompiuteriui
function Min (L)
{
    //Jei žaidimas jau baigtas - gražinama reikšmė, jei ne - paieška tęsiama toliau
    var k = FindWinner(L);
    if (Convert(k) != null) return Convert(k);
    var min = 99999;
    for (var i = 0; i < 9; i++)
    {
        if (L[i] == 0)
        {
            L[i] = 2;
            var vr = Max(L);
            if (vr != null && vr <= min) min = vr;
            L[i] = 0;
        }
    }
    return min;
}

//Funkcija randa patį geriausią ėjimą kompiuteriui, kurio reikšmė didžiausia
function Max (L)
{
    //Jei žaidimas jau baigtas - gražinama reikšmė, jei ne - paieška tęsiama toliau
    var k = FindWinner(L);
    if (Convert(k) != null) return Convert(k);
    var max = -99999;
    for (var i = 0; i < 9; i++)
    {
        if (L[i] == 0)
        {
            L[i] = 1;
            var vr = Min(L);
            if (vr != null && vr >= max) max = vr;
            L[i] = 0;
        }
    }
    return max;
}