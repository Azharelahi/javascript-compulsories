let newPromise = new Promise((res,rej)=>{
const promiseCall = ()=>{
console.log("Status of the promise inside promise call function is ",newPromise)
}

setTimeout(()=>{
promiseCall();
res("resolved")
console.log("Status of the promise outside promise call function is ",newPromise)


},2000)
})
console.log("hello azhar here ")