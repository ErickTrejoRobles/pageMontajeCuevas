

import './css/normalize.css'
import './styles.css';
import './css/mobile.css';

import './js/componentes'
import emailjs from 'emailjs-com';





    // const grid = document.querySelector('.grid');
    // const rowHeight = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    // const rowGrap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-gap'));
    // const item = document.querySelectorAll('.item');
    // const rowSpan = Math.ceil((item[3].querySelector('.servicio').getBoundingClientRect().height + rowGrap) / (rowHeight+rowGrap));
    const buttonEnviar = document.querySelector(".enviarCorreo"); 

    emailjs.init("user_lMbk8zVmjWeQUnRI5se5k");
    
    function resizeGridItem(item){
       
        const grid = document.getElementsByClassName("grid")[0];
        
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
       
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.querySelector('.servicio').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
          item.style.gridRowEnd = "span "+rowSpan;

          
      }
      
      function resizeAllGridItems(){
        const allItems = document.getElementsByClassName("item");
        for(let x=0;x<allItems.length;x++){
          resizeGridItem(allItems[x]);
        }
      }
      
      function resizeInstance(instance){
        const item = instance.elements[0];
        resizeGridItem(item);
      }
      
      window.onload = resizeAllGridItems();
      window.addEventListener("resize", resizeAllGridItems);
      
      const allItems = document.getElementsByClassName("item");
      for(let x=0;x<allItems.length;x++){
        imagesLoaded( allItems[x], resizeInstance);
      }



      buttonEnviar.addEventListener('click',()=>{


        const inputs = document.querySelectorAll(".input");
        const txtarea = document.querySelector('.txtarea')


        const tamplate = {
          name : inputs[0].value,
          empresa : inputs[1].value,
          email_contacto : inputs[2].value,
          message_html : txtarea.value



          
        }

        console.log(tamplate);
        emailjs.send("xiaomi","contacto_montajesc",tamplate).then(function(response) {

          for(let i=0;i<inputs.length;i++){
            inputs[i].value=""

          }
          txtarea.value="";
          
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
         alert("No se ha enviado el mensaje, intentelo de nuevo")
          console.log('FAILED...', error);});


      })