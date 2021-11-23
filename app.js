/*HTML in Javascript
const title = document.getElementById("title");

title.innerText="Got you!";

console.log(title.id);
console.log(title.className);
/*



/*the document object 
javascript는 html과 연결되어 있다. 
javascript코드에서 html을 변경할 수 있다. 


document.title="Hello ! From Js";
*/




/*recap
const age=parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Please write a real positive number.");
}else if(age<18){
    console.log("You are too young.");
}else if(age>=18 && age<=50){
    console.log("You can drink.");
}else if(age>50 && age<=80){
    console.log("You should exercise.");
}else if(age===100){
    console.log("Wow! you are wise.");
}else if(age>80){
    console.log("you can do whatever you want.");
}

||는 하나라도 true이면 true이다 !

*/





/*conditional part three
const age=parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Please write a real positive number.");
}else if(age<18){
    console.log("You are too young.");
}else if(age>=18 && age<=50){
    console.log("You can drink.");
}else if(age>50 && age<=80){
    console.log("You should exercise.");
}else if(age>80){
    console.log("you can do whatever you want.");
}
*/




/*conditional part two

const age=parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("Please write a number");
}else{
    console.log(age);
}
*/




/*conditional
const age= parseInt(prompt("How old are you?"));

console.log(age);
*/




/*returns
//recap about function. 그렇게 어려운 개념은 아니라고 생각하는데, 
//내가 그만큼 js랑 많이 익숙해졌다는 말이겠지. 
const age=96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge=calculateKrAge(age);

console.log(krAge);
*/




/*recap2
const player={
    name:"hyunwoo",
    age:25,
};

console.log(player);
player.name="nico";
console.log(player);
player.isSexy=true;
console.log(player);

function plus(a,b){
    console.log(a+b);
}

plus(5,10);

const calculator={
    add: function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    div:function(a,b){
        console.log(a/b);
    },
    mul:function(a,b){
        console.log(a*b);
    },
};

calculator.add(5,10);
*/




/*recap1
//const는 변하지 않는 값, let은 변할 수 있는값
//기본적으로 const를 사용하기 !!
//var은 사용하지 말기!!
const a=5;
let isHandsome=false;

isHandsome=true;

//undefined는 값이 정의되지 않았을 때 !
//null은 값이 비었을 때 !

const toBuy=["potato","tomato","pizza"];

console.log(toBuy);
toBuy[2]="water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);
*/




/*function
const player={
    name:"hyunwoo",
    age:25,
    // 밖에서 선언하는 함수랑은 형태가 다릅니다. 
    sayHello: function(otherPersonsName){
        console.log("Helloo!! "+otherPersonsName);
    },

};

console.log(player.name);
player.sayHello("nico");*/





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