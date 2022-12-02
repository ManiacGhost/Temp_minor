var nametext = document.getElementById("inpname");
var nameemail = document.getElementById("inpemail");
var namedesig = document.getElementById("inpdesig");
var namequal = document.getElementById("inpqual");
var namedep = document.getElementById("inpdep");
var namedoj = document.getElementById("inpdoj");
var nameinit = document.getElementById("inpinitdesig");
var namepay = document.getElementById("inppay");
var namespc = document.getElementById("inpspc");
var nameaddqual = document.getElementById("inpaddqual");
var namehigh = document.getElementById("inphigh");
var buttemp = document.getElementById("submitt");

function fun1(){
    var consout_name = nametext.value;
    var consout_email = nameemail.value;
    var consout_desig = namedesig.value;
    var consout_qual = namequal.value;
    var consout_dep = namedep.value;
    var consout_doj = namedoj.value;
    var consout_init = nameinit.value;
    var consout_pay = namepay.value;
    var consout_spc = namespc.value;
    var consout_addqual = nameaddqual.value;
    var consout_high = namehigh.value;

    
    console.log(consout_name);
    console.log(consout_email);
    console.log(consout_desig);
    console.log(consout_qual);
    console.log(consout_dep);
    console.log(consout_doj);
    console.log(consout_init);
    console.log(consout_pay);
    console.log(consout_spc);
    console.log(consout_addqual);
    console.log(consout_high)
    alert("YOUR VALUES HAVE BEEN SUBMITTED");

}

buttemp.addEventListener('click',fun1);