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
//sprw drugi sposob z for i if wyk 03 str 12