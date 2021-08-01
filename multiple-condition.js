
var isDinnerReady = true;
var dinnerWithMeet = true;
var pizzaBuy = 500;

if ((isDinnerReady == true && pizzaBuy < 50) || dinnerWithMeet ==true){
    console.log('I will take diner');
}
else {
    console.log('I will keep coding')
}



var jobReady = false;
var moneySaved = 40000;
var hasFlat = false;

//  two condition and && condition
// if (jobReady == true && moneySaved > 300000){
//     console.log('cholo kobul boli')
// }
// else {
//     console.log ('tor Kopale Biye nai');
// }


// or condition
// if (jobReady == true || moneySaved > 300000){
//     console.log('cholo kobul boli')
// }
// else{
//     console.log('tor kopale biye nai');
// }


// three and && condition
// if (jobReady == true && moneySaved > 300000 && hasFlat == true){
//     console.log('cholo kobul boli')
// }
// else{
//     console.log('tor kopale biye nai');
// }

// three and || condition
if ((jobReady == true && moneySaved > 300000) || hasFlat == true){
    console.log('cholo kobul boli')
}
else{
    console.log('tor kopale biye nai');
}

