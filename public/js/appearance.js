let findssd=document.querySelector(".search");
if(findssd){
findssd.addEventListener("click",()=>{
    let inp=document.querySelector("#highlight");
   
    if(inp.value==="resume" || inp.value==="RESUME" || inp.value==="Resume")
    {   
        let card=document.querySelector(".card");
        
        card.classList.add("animation");
    }
})
}