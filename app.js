function genrgb(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
let h1=document.querySelector("h1")
let btn=document.querySelector("button");
let div=document.querySelector("div")
btn.addEventListener("click",
    function(){
        let newColor=genrgb();
        div.style.backgroundColor=newColor;
        h1.innerText=newColor;

    }
)