
function sayhello(name, age){
    console.log("hello",name,"my Age Is",age)
};
sayhello("ben",21);


function sayhello(name, age){
    console.log(`hello ${name} you are ${age} old`)
};
sayhello("ben",21);

function sayhello(name, age){
    return(`hello ${name} you are ${age} old`)
};

const greetben = sayhello('ben',21)

console.log(greetben)


const calculator = { 
plus : function( first,second){
    return first+second
}
}
const plus = calculator.plus(5,5)  
console.log(plus)

const math={
minus : function( a,b){
    return a,b
}
}
const minus = math. minus(5,1)
console.log(minus)

const bublle = {
  sqrt : function (c) {
      return c
  } 
}
const sqrt= bublle. sqrt(3)
console.log(sqrt)