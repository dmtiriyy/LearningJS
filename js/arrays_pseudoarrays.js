

const arr = [12,2,13,6,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
    return a-b;
}
//arr.pop(); // удаляет последний елемент
//arr.push(10);//добавляет елемент в конец масива
/* arr[99] = 0;
console.log(arr.length);
console.log(arr);
 */

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item}  inside array ${arr}`);
});

/* for (let value of arr){ //можно остановить цикл break continue
    console.log(value);
} */
//console.log(arr);

/* for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
} */

const str = prompt("","");
const products = str.split(", ");//формируем список
products.sort();
console.log(products.join('; '));