if (4 == 9){
    console.log('Ok');
} else{
    console.log('Error');
}

/* const num = 50;
if(num < 49){
    console.log('Error');
} else if(num > 100){
    console.log('много');
} else{
    console.log('Ok');
} */

//(num == 50) ? console.log('Ok!') : console.log('Error');//тернарный оператор

const num = 50;

switch (num) {
    case 49:
        console.log('False');
        break;
    case 100: 
        console.log('False');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Not this time');
        break;

}
//LOGICAL OPERATORS
/* const hamburger = 5;
const fries = 0;

if(hamburger && fries){
    console.log('I eated');
}
 */

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries );

/* console.log(1 && 0);//0(false)
console.log(1 && 5);//5(last)
console.log(null && 5);//null
console.log(0 && 'fwefwd');//0 */


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if(hamburger === 3 && cola === 2 || fries ===3 && nuggets ){
    console.log('All eated');
}else{
    console.log('We go out');
}

console.log(hamburger|| cola || fries );


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log( 5 === 5 && 3 > 1 || 5);