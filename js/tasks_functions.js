function sayHello(name){
    console.log(`Привет, ${name}!`);
}
sayHello('Anton');

function returnNeighboringNumbers(num){
    let arr = [];
    arr.push(num-1,num, num+1);
    console.log(arr);
}
returnNeighboringNumbers(3);

/* function getMathResult(num1, num2){
    if (typeof(num2)!=='number'|| num2 <=0){
        return num1;
    }
    let str ='';
    for (let i=1;i< num2; i++){
        if(i=== num2){
        str+= `${num1*i}`;
        }else{
            str+=`${num1*i}---`;
        }
    }
    return str;
}
getMathResult(11,5); */
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);
//a bit harder tasks
/* Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика,
 иногда используется в создании анимаций). Эта функция принимает
  в себя целое число со значением длины ребра куба.
 Ответ выведите в формате строки, который изображен в примерах. */
 function calculateVolumeAndArea(a){
    let v =  Math.pow(a,3);
    let area = 6 * Math.pow(a,2);
    let calc = (`Объем куба: ${v}, площадь всей поверхности: ${area}`);
    return calc; 
 }
 calculateVolumeAndArea(5);


 function getCoupeNumber(numb){
    if (typeof(numb) !== 'number' || numb < 0 || !Number.isInteger(numb)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (numb === 0 || numb > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (numb <= i) {
            console.log (Math.ceil(i / 4));
        }
    }
}
getCoupeNumber(33);

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            console.log (Math.ceil(i / 4));
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(7);

/* Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
 (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
  Если вместо аргумента приходит не число,
 дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные" */
 
 
 function getTimeFromMinutes(minTot) {
    if(!Number.isInteger(minTot) || minTot<0 || typeof(minTot) !== "number"){
        return "Ошибка, проверьте данные";
    }
    const hour = Math.floor(minTot/60);
    const minutes = minTot % 60;
    let hoursStr = "";
    switch (hour){
    case 0:
        hoursStr = "часов";
        break;
    case 1:
        hoursStr = "час";
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = "часа";
        break;
    default:
        hoursStr = "часов";
        
    }

    console.log(`Это ${hour} ${hoursStr} и ${minutes} минут`);
 }
 getTimeFromMinutes(50);


/* 
 Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
  Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены. */

function findMaxNumber(num1,num2,num3,num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4){
    console.log(num1);
    }else if(num2 > num1 && num2 > num3 &&  num2 > num4){
        console.log(num2);
    }else if(num3 > num1 && num3 >num2 && num3> num4){
        console.log(num3);
    }else if(num4 > num1 && num4>num2 && num4 > num3){
        console.log(num4);
    } else if(typeof(num1)!=="number"||typeof(num2)!=="number" || typeof(num3)!=="number"|| typeof(num4)!=="number"){
     console.log(0);   
    }
}
findMaxNumber(2,3.3,1,2);

//ЧИСЛА ФИБОНАЧЧИ

function fib(num){
    if(typeof(num)!== "number"|| num<=0 || !Number.isInteger(num)){
        return "";
    }
    let result ='';
    let first = 0;
    let second = 1;
    for(let i = 0; i< num; i++){
        if(i + 1 === num){
            result += `${first}`;
        } else {
            
        }
    }
    
}