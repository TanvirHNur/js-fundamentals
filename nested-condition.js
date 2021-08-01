var danishPrice = 50;
var breadPrice = 30;
var toastprice = 10;
var myCash = 150;
var wellPacked = true;

// if (danishPrice < myCash){
//     console.log("danish kheye danish jabo");
// }
// else if(breadPrice < myCash){
//     console.log('I will eat bread');
// }
// else if (toastprice < myCash){
//     console.log('I will eat toast');
// }
// else{
//     console.log('I will it banana');
// }

// nested condition

if (danishPrice < myCash){
    if(wellPacked == true){
        console.log('I will eat danish')
    }
    else {
        console.log("I will not eat, it may contain virus");
    }
}