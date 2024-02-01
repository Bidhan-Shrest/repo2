//callback
// const getResult = (result)=>{
//     return result;

// };
// const main = (sentence)=>{
//     return getResult(sentence);
// };

// const result = main("just lurking");
// console.log(result);

//promise

// const printHello = (hello) => {
//     return new Promise((resolve, reject) =>{
//         resolve(hello);
//     });
// };

// printHello("Namaste")
// .then((result) => {
//     return result;
// })
// .then((result) => {
//     console.log(result + " bidhan");
// });

//async/await

const hello = async (name) => {
    return "hello " + name;
}

console.log(hello("raktim"))
