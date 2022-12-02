var cbweek1 = document.getElementById("c1");
var cbweek2 = document.getElementById("c2");
var cbweek3 = document.getElementById("c3");
var cbweek4 = document.getElementById("c4");
var cbweek5 = document.getElementById("c5");

/*
let cbweek1_attended = 1;
let cbweek2_attended = 3;
let cbweek3_attended = 5;

let cbweek1_organized = 5;
let cbweek2_organized = 10;
let cbweek3_organized = 20;
*/

function apiscore(){
    if(cbweek4.checked == true){
        cbweek5.checked == false;
        cbweek1.value = 1;
        cbweek2.value = 3;
        cbweek3.value = 5;
        console.log(cbweek1);
        console.log(cbweek2);
        console.log(cbweek3);

    }
    else if(cbweek5.checked == true){
        cbweek4.checked == false;
        cbweek1.value = 5;
        cbweek2.value = 10;
        cbweek3.value = 20;
        console.log(cbweek1);
        console.log(cbweek2);
        console.log(cbweek3);
    }
}