// let a=5;
// let b=15
// console.log(`the sum is ${a+b}`);
const promises=new Promise((resolve,reject)=>{
    resolve("data fetched successfully");
    reject("error in fetching data");
    
})
promises.then((data)=>{
    console.log(data);
})
promises.catch((error)=>{
    console.log(error);
})