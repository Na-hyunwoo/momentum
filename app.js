const loginForm=document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input");

const link=document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

//함수 뒤에 onLoginSubmit()과 같이 작성하는 것은 함수를 바로 실행하길 원한
//다는 것인데, 우리는 그것을 원하지 않기 때문에 이렇게 작성한다. 
//우리가 이렇게 적어놓으면 loginForm에 이벤트가 발생했을 때, 이 함수가 
//실행된다고 할 수 있다. 
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);

handleLinkClick