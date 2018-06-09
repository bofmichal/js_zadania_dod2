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