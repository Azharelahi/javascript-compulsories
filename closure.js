function adder(num){
    function add(b){
        console.log("sum is ",num+b)
    }
    return add
}
let addto5 = adder(5);
let addto10=adder(10)
addto5(13)
addto10(10)
