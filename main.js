
'use strict'


 let time = 4000;
 let i = 1;
 let cards = document.getElementsByClassName('card');

function changeCard(){
  
  
    if(i > cards.length-1){

      i= 1;
    }if(i < cards.length){
      cards[i].classList.toggle('visible');
    
      setTimeout(changeCard, time);
  
      i++;
      
      
      
    }
    
  } 
    
  

  function removeClass(){

      
      cards[i].classList.remove('visible');
          
    };
  
  
  
    
  
  

window.onload = changeCard;