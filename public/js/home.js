const url= window.location.href;
const home= document.getElementById("home");
const about=document.getElementById("about")
console.log(url);   //It will print in windows console
if(url.indexOf("about")>-1){
    home.classList.remove("active");
    about.classList.add("active");
}
else if(url.indexOf("contact")>-1){
    home.classList.remove("active");
    about.classList.remove("active");
    document.getElementById("contact").classList.add("active");
}
else if(url.indexOf("compose")>=0) {
    home.classList.remove("active");
}

