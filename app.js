//let은 변경할 수 있지만, constant는 변경할 수 없다. 
//var은 옛날 방식이므로 사용을 지양하자. 

const a=5;
const b=2;
let myName="hyunwoo"

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+myName);

myName="hyunwoong"

console.log("your new name is "+myName);