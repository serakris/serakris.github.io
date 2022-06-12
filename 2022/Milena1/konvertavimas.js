var input = document.getElementById('pirmasinput');
var result = document.getElementById('ats');
document.getElementById("pirmasbtn").onclick=function paverskvienas() {
    let metrai=document.getElementById("pirmasinp").value;
    let keisti=document.getElementById("ats");
    keisti.innerHTML=Number(metrai) * 1000000;
}
var input = document.getElementById('antrasinput');
var result = document.getElementById('atsdu');
document.getElementById("antrasbtn").onclick=function paverskdu() {
    let kilogramai=document.getElementById("antrasinp").value;
    let keistidu=document.getElementById("atsdu");
    keistidu.innerHTML=Number(kilogramai) * 1000;
}
var input = document.getElementById('treciassinput');
var result = document.getElementById('atstrys');
document.getElementById("treciasbtn").onclick=function paversktrys() {
    let cm=document.getElementById("treciasinp").value;
    let keistitrys=document.getElementById("atstrys");
    keistitrys.innerHTML=Number(cm) / 1000;
}