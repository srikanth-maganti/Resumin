//adding education
let added=document.querySelector(".added");
ed_count=0;
added.addEventListener("click",()=>{
    let edu=document.querySelector(".education");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    div1.setAttribute("class","input-group");
    div2.setAttribute("class","input-group");
    let input1=document.createElement("input");
    let input2=document.createElement("input");
    let input3=document.createElement("input");
    let input4=document.createElement("input");
   
    let btn=document.createElement("button");

    let l=[input1,input2,input3,input4];
    let placeholder=["course&branch","clg/university","cgpa","june 2022-apr 2026"];
    let i=0;
    for(input of l)
    {
        input.setAttribute("class","form-control");
        input.setAttribute("name","education");
        input.setAttribute("type","text");
        input.setAttribute("placeholder",placeholder[i]);
        if(i<2)
        {
            div1.appendChild(input);
        }
        else{
            div2.appendChild(input);
        }
        

        i++;
    }
 
    

    
    btn.setAttribute("class","btn btn-outline-secondary deledu");
    btn.setAttribute("type","button");
    btn.innerHTML="<b>-</b>";

    div1.appendChild(btn);
    
    edu.appendChild(div1);
    edu.appendChild(div2);
     
    
    btn.addEventListener("click",deledu_exp);
     
});



//adding experience

let addexp=document.querySelector(".addexp");
addexp.addEventListener("click",()=>{

        let exp=document.querySelector(".experience");
        let div=document.createElement("div");
        div.setAttribute("class","input-group")
        let input1=document.createElement("input");
        let input2=document.createElement("input");
        let input3=document.createElement("input");
        let btn=document.createElement("button");
        

        let l=[input1,input2];
        let placeholder=["position","company"];
        let i=0;
        for(input of l)
        {
            input.setAttribute("class","form-control");
            input.setAttribute("name","experience");
            input.setAttribute("type","text");
            input.setAttribute("placeholder",placeholder[i]);
            div.appendChild(input);
            i++;
        }
        input3.setAttribute("class","form-control mb-3");
        input3.setAttribute("name","experience");
        input3.setAttribute("placeholder","experience desc");

        btn.setAttribute("class","btn btn-outline-secondary delexp");
        btn.setAttribute("type","button");
        btn.innerHTML="<b>-</b>";

        div.appendChild(btn);
        exp.appendChild(div);
        exp.appendChild(input3);

        btn.addEventListener("click",deledu_exp);
});





//adding projects
let addpro=document.querySelector(".addpro");
addpro.addEventListener("click",()=>{
    let pro=document.querySelector(".project");
    let div=document.createElement("div");
    div.setAttribute("class","input-group mb-2")
    let input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("name","project");
    input1.setAttribute("placeholder","project-title");
    input1.setAttribute("type","text");

    let input2=document.createElement("textarea");
    input2.setAttribute("class","form-control");
    input2.setAttribute("name","project");
    input2.setAttribute("placeholder","project-desc");
   
    let btn=document.createElement("button");
    btn.setAttribute("class","btn btn-outline-secondary delpro");
    btn.setAttribute("type","button");
    btn.innerHTML="<b>-</b>";

    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(btn);
    pro.appendChild(div);

    btn.addEventListener("click",delpro_achieve);

    

})



//adding achievments
let addach=document.querySelector(".addach");
addach.addEventListener("click",()=>{

    let ach=document.querySelector(".achievements");
    let div=document.createElement("div");
    div.setAttribute("class","input-group mb-3")
    let input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("name","achievements");
    input1.setAttribute("type","text");
    
    
    let btn=document.createElement("button");
    btn.setAttribute("class","btn btn-outline-secondary delach");
    btn.setAttribute("type","button");
    btn.innerHTML="<b>-</b>";
    div.appendChild(input1);
    div.appendChild(btn);
    ach.appendChild(div);

    btn.addEventListener("click",delpro_achieve);
    

});



//deleting education or experience
function deledu_exp(){
    div1=this.parentElement;
    div2=div1.nextElementSibling;
    div1.remove();
    div2.remove();


}


//deleting projects or achievements
function delpro_achieve(){
    div=this.parentElement;
    div.remove();

}



let btn=document.querySelector("#submit");

btn.addEventListener("click",()=>{
            
        const formInputs = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="number"]');


        const filteredInputs = Array.from(formInputs).filter(input => {
            
            let isWithinExperience = input.closest('.experience') !== null;
            let isWithinAchievements = input.closest('.achievements') !== null;
            return !isWithinExperience && !isWithinAchievements;
        });

        const areInputsNotEmpty = Array.from(filteredInputs).every(input => {
            return input.value.trim() !== ''; 
        });

        if (areInputsNotEmpty) {
            
            
            let div=document.querySelector("#page");
            div.style.display="none";
            let loader=document.querySelector(".loader");
            loader.style.display="block";
        } 

            
            
            
            

});












