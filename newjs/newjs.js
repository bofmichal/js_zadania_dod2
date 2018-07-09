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
//zad 10
var tab10=[];
function tablica10(){    
    for (var i = 0; i < 10; ++i) {
        tab10[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab10);
        document.getElementById("tab10").innerHTML = tab10;
}
function spr10(){
    var spra=tab10;
    var paramx=parseFloat(document.getElementById("paramx10").value);
    var gdzie; 

for (var i = 0; i < spra.length; ++i) {
if(spra[i]%paramx==0){
    gdzie=i;
    console.log(gdzie);
    console.log(spra[i]);
    document.getElementById("sprawdzx10").innerHTML = spra[i] + ", która występuje na pozycji: "+gdzie;
    break;
    }
    else {
        console.log("nie wystepuje");
        document.getElementById("sprawdzx10").innerHTML ="nie wystepuje";
       break; 
    }
}
}
//zad11
var tab11=[];
function tablica11(){    
    for (var i = 0; i < 10; ++i) {
        tab11[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab11);
        document.getElementById("tab11").innerHTML = tab11;
}
function spr11(){
    var spra=tab11;
    var paramx=parseFloat(document.getElementById("paramx11").value);
    var gdzie; 

for (var i = 0; i <spra.length ; ++i) {
if(spra[i]%paramx!=0){
    gdzie=i;
    console.log(gdzie);
    console.log(spra[i]);
    document.getElementById("sprawdzx11").innerHTML = spra[i] + ", która występuje na pozycji: "+gdzie;
    //break;
    }
    else {
        console.log("nie wystepuje");
        document.getElementById("sprawdzx11").innerHTML ="nie wystepuje";
        //break; 
    }
}
}
//zad12
var tab12=[];
function tablica12(){    
    for (var i = 0; i < 10; ++i) {
        tab12[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab12);
        document.getElementById("tab12").innerHTML = tab12;
}
function spr12(){
    var spra=tab12;
    var paramx=parseFloat(document.getElementById("paramx12").value);    
    function podzielna(value){
        return (value%paramx==0)
    }
    var asad = spra.filter(podzielna);
    console.log(asad);
    document.getElementById("sprawdzx12").innerHTML = asad;

}
//zad13
var tab13=[];
function tablica13(){    
    for (var i = 0; i < 10; ++i) {
        tab13[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab13);
        document.getElementById("tab13").innerHTML = tab13;
}
function spr13(){
    var spra=tab13;    
    var max = Number.MIN_VALUE; // albo max = ar[0]
    var maxi; // maxi = 0
    for (var i = 0; i < spra.length; ++i) {
    if (spra[i] > max ) {
        if (spra[i] %2==0 ) {
    max = spra[i];
    maxi = i;
        }
    //break;
    }
    }
    console.log(max);
    console.log("wartosc najwieksza: " + max + " na pozycji " + maxi);
    document.getElementById("sprawdzx13").innerHTML = max + " na pozycji " + maxi;
}
//zad14
var tab14=[];
function tablica14(){    
    for (var i = 0; i < 10; ++i) {
        tab14[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab14);
        document.getElementById("tab14").innerHTML = tab14;
}
function spr14(){
    var spra=tab14;    
    var min = Number.MAX_VALUE;
    var mina = Number.MAX_VALUE;
    var mini;
    var minia;
    var minimi; 
    var miniami;
    for (var i = 0; i < spra.length; ++i) {
    if (spra[i] < min) {
           
    min = spra[i];
    mini = (i+1);
    minimi=i   
    }
    }
    
    console.log(min);
    console.log("wartosc najniejsza: " + min + " na pozycji " + minimi);
    document.getElementById("sprawdzx14a").innerHTML = min + " na pozycji " + minimi;
    for(var i = 0; i < 10; i++)                 
    {                                           
        if(spra[i] != spra[(mini-1)])                    
        {                                       
            if(spra[i] < mina)                                 
                {
                    mina = spra[i];
                    minia = (i+1);
                    miniami=i;
                }
        }
    }
    console.log(mina);
    document.getElementById("sprawdzx14").innerHTML = mina + " na pozycji " + miniami;
}
//zad15
var tab15=[];
function tablica15(){    
    for (var i = 0; i < 10; ++i) {
        tab15[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab15);
        document.getElementById("tab15").innerHTML = tab15;
}
function spr15(){
    var spra=tab15;    
    var max = Number.MIN_VALUE; 
    var ile=0; 
    var maxi;
for (var i = 0; i < spra.length; ++i) {
    if (spra[i] > max ) {        
    max = spra[i];
    maxi=i;       
    }
}
for (var i = 0; i < spra.length; ++i) {
    if (spra[i] == spra[maxi] ) {        
        ile++;            
        }
    }
    console.log(maxi);
    console.log(max);
    console.log(ile);    
    console.log("wartosc najwieksza: " + max + " w ilości: " + ile);
    document.getElementById("sprawdzx15").innerHTML = max + " w ilości: " + ile;
}
//zad16
var tab16=[];
function tablica16(){    
    for (var i = 0; i < 10; ++i) {
        tab16[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab16);
        document.getElementById("tab16").innerHTML = tab16;
}
function spr16(){
    var spra=tab16;    
    var min = Number.MAX_VALUE;     
    var mini;
    var ar=[];
    for (var i = 0; i < spra.length; ++i) {
    if (spra[i] < min ) {        
    min = spra[i];
    mini=i;       
    }
}
for (var i = 0; i < spra.length; ++i) {
    if (spra[i] === spra[mini] ) {               
        ar[i]=i;
        //console.log(ar[i]);                    
        }        
    }
    function najmniejsza(value) {
        return (value >= 0);
        }
        var baba = "[" + ar.filter(najmniejsza)+"]";
    console.log(ar);
    console.log(baba);    
    console.log(min);
    console.log(mini);     
    console.log("wartosc najmniejsza: " + min + " na pozycji: " + mini);
    document.getElementById("sprawdzx16").innerHTML = "na pozycji: " + baba + " a wart najmniejsza to "+ min;
}