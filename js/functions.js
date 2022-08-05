//замыкание функции это сама функция вместе со всеми внешними переменными которые ей доступны
let num = 20;
function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

/* function calc(a, b){
    return (a+b);
    console
}
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6)); */
//могут вызыватся перед обьявлением
function ret(){
    let num = 50;

    //


    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();
//arrow function
const calc = a => a ;
//arguments
const usdCurr = 28;
const discount = 0.9;
function convert (amount, curr) {
   return curr * amount;
}

function promotion(result) {
    console.log (result * discount);
    
}
promotion(convert(500, usdCurr));

const res =  convert(500, usdCurr);
promotion(res);


function test(){
    for (let i=0; i<5; i++){
        console.log(i);
        if(i === 3) return
    }
    console.log('Done');
}

test();

function doNothing(){};
console.log(doNothing() === undefined);

//callback-functions

function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log(`I learn: ${lang}`);
    callback();
}

function done(){
    console.log('I passed lesson!');
}
learnJS('JS', done);