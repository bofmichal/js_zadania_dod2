//zad 1
function tablica1(){
    var tab1=[];
    
    for (var i = 0; i < 10; ++i) {
        var a=Math.pow(2, i)
        tab1[i] = parseInt((1000/a));
        }
        console.log(tab1);
        document.getElementById("tab1").innerHTML = tab1;
}
//zad 2
function tablica2(){
    var tab2=[];
    tab2[0]=1;
    tab2[1]=1;
    //tab2[2]=tab2[0]+tab2[1];
    for (var i = 0; i < 10; i++) {
        tab2[i+2] = tab2[i]+tab2[i+1];
        
        
        }
        
        console.log(tab2);
        document.getElementById("tab2").innerHTML = tab2;
}
//zad3
function tablica3(){
    var tab3=[];
    for (var i = 0; i < 10; ++i) {
        tab3[i] = 1 + Math.floor(Math.random() * (i*10));
        }
        console.log(tab3);
        document.getElementById("tab3").innerHTML = tab3;
}
//zad4
var tab4=[];
function tablica4(){    
    for (var i = 0; i < 10; ++i) {
        tab4[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab4);
        document.getElementById("tab4").innerHTML = tab4;
}
function spr(){
    var spra=tab4;
    var paramx=parseFloat(document.getElementById("paramx").value);
    var wystepuje = spra.indexOf(paramx) !== -1;
    var gdzie = spra.indexOf(paramx);
console.log(wystepuje);
console.log(gdzie);
if(wystepuje!== -1){
document.getElementById("sprawdzx").innerHTML = "występuje na pozycji: "+gdzie;
}
if(wystepuje == false){
    document.getElementById("sprawdzx").innerHTML = "nie występuje";  
}
}
//drugi sposob oraz podobne zad6
/*function spr(){
    var spra=tab4;
    var szukaj = parseFloat(document.getElementById("paramx").value);
var znalezione;
for (var i = 0; i < spra.length; ++i) {
if (spra[i] === szukaj) {
znalezione = i;
break;
}
}
console.log(spra);
if (isNaN(znalezione)) {
console.log("nie znaleziono!");
}
else {
console.log("znaleziono na pozycji: " + znalezione);
}
}*/
//zad5
var tab5=[];
function tablica5(){    
    for (var i = 0; i < 10; ++i) {
        tab5[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab5);
        document.getElementById("tab5").innerHTML = tab5;
}
function spr2(){
    var spra=tab5;
    var paramx=parseFloat(document.getElementById("paramx2").value);
    var wystepuje = spra.indexOf(paramx) !== -1;
    var gdzie = spra.indexOf(paramx);
console.log(wystepuje);
console.log(gdzie);
if(wystepuje == true){
document.getElementById("sprawdzx2").innerHTML = "występuje na pozycji: "+gdzie;
}
if(wystepuje == false){
    document.getElementById("sprawdzx2").innerHTML = "nie występuje";  
}
}
//zad7
var tab7=[];
function tablica7(){    
    for (var i = 0; i < 10; ++i) {
        tab7[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab7);
        document.getElementById("tab7").innerHTML = tab7;
}
function spr3(){
    var spra=tab7;
    var szukaj = parseFloat(document.getElementById("paramx3").value);
var znalezione=[];
var ilosc = 0;
var str="";
for (var i = 0; i < spra.length; ++i) {
if (spra[i] === szukaj) {
    ilosc++;
znalezione[i] = " "+i+" ";
str+=i+", ";

    if(ilosc==0){
        console.log("nie znaleziono!");
    }
    else {
        console.log("znaleziono na pozycji: " + znalezione);
        console.log(str);
    }
    }
}

console.log(spra);
console.log(ilosc);
document.getElementById("sprawdzx3").innerHTML="znaleziono w liczbie: "+ilosc+" ,na pozycji: "+str;
}
/*if (isNaN(znalezione)) {
console.log("nie znaleziono!");
}
else {
console.log("znaleziono na pozycji: " + znalezione + " w ilości: "+ ilosc);
}
}*///zrobic na ktorych pozycjach