function sayHello(name){
    console.log("Hello my name is " + name);
}


sayHello("hyunwoo!!");



/*object
//속성의 값 변경, 속성 추가 등이 가능하다. 
const player={
    name:"hyunwoo",
    points:10,
    fat:false,
};

console.log(player);
player.fat=true;
player.lastName="potato";
player.points= player.points+15;
console.log(player);
*/





/*array
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];

//array로부터 속성 가져오기 !!
console.log(daysOfWeek);

//array에 day 넣기
daysOfWeek.push("sun");

console.log(daysOfWeek);
*/





/*boolean
//true와 false
//null값은 절대 자연적으로 발생하지 않습니다. 유저가 직접적으로 변수 안에
//아무것도 없다는 것을 확실히 하기 위해 사용합니다. 
//쉽게 말해서 여긴 비어있어요. 라고 알아들으면 됩니다. 

const amIFat=null;
let something;
console.log(something,amIFat);
*/




/* let과 const

//let은 변경할 수 있지만, constant는 변경할 수 없다. 
//보통은 const를 사용하고 변경을 사용할 경우에는 let으로 변수를 선언한다. 
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
*/