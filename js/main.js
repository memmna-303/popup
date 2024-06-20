 let openbut=document.querySelector(".open-btn");
 let closebut=document.querySelector(".close-btn");

 openbut.onclick=function(){
    document.querySelector(".cookies-box").classList.add('active');


 }

closebut.onclick=function(){
    document.querySelector(".cookies-box").classList.remove('active');


}


