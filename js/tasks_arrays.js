const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let newarr = [ ... arr];
    if ( arr === []){
        console.log('Семья пуста');
    }else{
    console.log(`Семья состоит из ${newarr}`);
}
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(cities){
        console.log(cities.toLowerCase());
    });
}
standardizeStrings(favoriteCities);