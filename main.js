
'use strict'


let time = 4000;
let i = 1;
let cards = document.getElementsByClassName('card');

function changeCard(){
  
    if(i > cards.length-1){
      i= 1;
    }
    if(i < cards.length){
      cards[i].classList.toggle('visible');
      setTimeout(changeCard, time);
      i++;
    }
  };
    

  //nav mobile//
  function navSlide(){
    const bars = document.querySelector('#bars');
    const nav =document.querySelector('.nav-links');

    bars.addEventListener('click', function(){
      nav.classList.toggle('nav-links-active');
    });
  };
  
  navSlide();
  

  
  
   
 
  

  
    
  
  

window.onload = changeCard;