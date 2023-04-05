const url= getCurrentURL();
console.log(url);
if(url.indexOf("/about")>-1){
    document.getElementById("active-link").classList.remove("active");
}