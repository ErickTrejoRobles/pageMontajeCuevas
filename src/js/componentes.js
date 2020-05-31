


 const buttonMenu = document.querySelector(".icon-hamburguesa");
 const div_options= document.querySelector(".div_options");

 console.log(buttonMenu);

 buttonMenu.addEventListener('click',()=>{

    
    div_options.classList.add("is-active");

 })

 div_options.addEventListener('click',(event)=>{

    console.log();

    if(event.target.localName == "a"){
        div_options.classList.remove("is-active");
        console.log(div_options.classList);
    }

    else{
        div_options.classList.remove("is-active");
    }
 })

