setInterval(function startUp(){
    document.getElementById("leftcontent").style.display = "flex";
    document.getElementById("logo").style.display = "flex";
},2000);
setInterval(function startUp2(){
    document.getElementById("box").style.display = "flex";
    document.getElementsByClassName("break")[0].style.display = "flex";
    document.getElementById("about").style.display = "flex";
    document.getElementById("work").style.display = "flex";
    document.getElementById("contact").style.display = "flex";
},4000);
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop >  window.innerHeight * 1.3|| document.documentElement.scrollTop > window.innerHeight * 1.3) {
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.position = "sticky";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.right = "0";
    } else {
        document.getElementById("navbar").style.display = "none";
    }
};