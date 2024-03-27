
/*section changing*/

const sectionPositions = [
  document.getElementById("intro").offsetTop,
  document.getElementById("next").offsetTop,
  document.getElementById("infome").offsetTop,
];
let currentSectionIndex = 0;
document.body.style.overflow = 'hidden';
// Disable default scrolling behavior



function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth' // Smooth scroll effect
      });
  }
}

function changeImage(imageName,text) {
    var imageContainer = document.querySelector('.img-scnd');
    var texth=document.querySelector('.te1');
   
    imageContainer.style.backgroundImage ='url('+imageName+')';
    imageContainer.style.transition= '0.15s';
    if(imageName=='img/bg7.jpg'){
        texth.innerHTML='Hi,There <i class="fa-regular fa-hand" ID="ic"></i><br>I am Jithu';
        texth.style.color='rgb(253, 218, 152)';
        texth.style.transition= '1s';
    }
    else{
        texth.innerHTML= text;
        texth.style.transition= '0.25s';
        
        if(text=='I do make webpages<br>HTML,CSS,JS')
        {
            texth.style.color='#f1cdcd';
           
        }
        if(text=='languages i speak <br> Python, C, Java')
        {
            texth.style.color='#cbf0f7';
        }
        if(text=='Made some video edits<br>Capcut')
        {
            texth.style.color='#e9d9b8';
        }
        
        if(text=='FRAUD x TOX<br> PC and Mobile')
        {
            texth.style.color='#f5c1c1';
        }

    }
    
    
    
  }

  // letter hack 
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
  
  document.querySelector(".texting").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
// newww 

