
import './styles.css';
import './css/mobile.css';
import './css/normalize.css'




    // const grid = document.querySelector('.grid');
    // const rowHeight = parseInt( window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    // const rowGrap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-gap'));
    // const item = document.querySelectorAll('.item');
    // const rowSpan = Math.ceil((item[3].querySelector('.servicio').getBoundingClientRect().height + rowGrap) / (rowHeight+rowGrap));


    function resizeGridItem(item){
        console.log(item);
        const grid = document.getElementsByClassName("grid")[0];
        console.log(grid);
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        console.log(rowHeight);
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.querySelector('.servicio').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
          item.style.gridRowEnd = "span "+rowSpan;

          console.log(rowSpan);
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

