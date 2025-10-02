let checking=0;
let savings=0;
let deposit=100.75;
let transaction="deposit";
let access="checking";
let phrase1=`The balance in your checking is $${checking}`;

if (transaction=="deposit" && access=="checking"){
    checking+=deposit;
    console.log(phrase1)



}