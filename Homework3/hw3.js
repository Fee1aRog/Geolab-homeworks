// //1
// const arr=[1, 'one', 5, 'okay', 30];
// let count = 0;
// const num= arr.filter(function(item){
//     return (Number(item));
// })
// const arr2 = num.map((item) => {
//     if ((item) %2 === 0){
//         return item / 2;
//     } else ((item) %2 === 1)
//         return item ** 2;
    
// }).forEach((item) => count += item);
////აქ ვერ გავაკეთე პირობის ბოლო ნაწილი, ანუ თუ რიცხვი არ გვაქვს მასივში რომ შესაბამისი ტექსტი გამოიტანოს ეკრანზე და მაინტერესებს როგორ კეთდება.
// console.log(Math.round(count));
// //1


// //2
// const arr=[4, 5, 11, 2, 9, 99, 1092, 1];
// arr.sort(function(a, b){return a-b});
// console.log(arr);
// //2
// //3
// const even = arr.filter(function(item){
//     if ((item) %2 === 0){
//         return item;
//     }
// });
// console.log(even);
// //3
// //4
// const reducer = (pre, cur) => pre * cur;
// console.log(arr.reduce(reducer));
// //4


// //5
// const arr = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB']
// for(var i = 0 ; i < arr.length ; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLocaleLowerCase().slice(1);
// }
// console.log(...arr);
// //5