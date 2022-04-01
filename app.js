const loginBtn=document.getElementById("login");
const signBtn=document.getElementById("signup");
const box= document.querySelector(".enter-data");
const main=document.getElementById("main");
const footer=document.getElementById("footer");

const desplegar=()=>{
    if (box.style.position=="sticky"){
        box.style.position= "absolute";
        box.style.top= "-100%";
        main.style.top= "0";
        footer.style.top= "0";
    }else{
    box.style.position="sticky";
    box.style.top= "70px";
    main.style.top= "-165px";
    footer.style.top= "-165px";
    }
};

loginBtn.addEventListener("click",desplegar);
signBtn.addEventListener("click",desplegar);