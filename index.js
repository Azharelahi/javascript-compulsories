function adder(num){
    function add(b){
        console.log(num+b)
    }
    return add
    
}
const addto5 = adder(5)
const addto10 = adder(10)
addto10(5)
addto10(20)

addto5(2)