const arr = ['a','b','c'];//масив это те же обьекты только ключ это номер по порядку
//масив частный случай обьектов
arr[10] = '2456';
console.log(arr[10]);
console.log(arr);


const arrObj ={
    a:'a',
    1:'b',
    2:'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
const b ='h';


//console.log(arr[1]);
console.log(arrObj[1]);//через точку получить значение нельзя
arrObj.b = '1234';
console.log(arrObj['b']);//только через кавычки
console.log(arrObj.b);
//const obj={a: 1, b: 2};
const obj = {
    Anna : 500,
    'Alice': 800
};
//['Anna', 500, 'Alice',900];
