
//FUNÇÃO DE TROCAR TEMA DA PAGINA
const gradients = [
    {
    background:'linear-gradient(to right, rgb(255, 255, 255), rgb(51, 92, 115))',
    color: "#000000"
    },

    {
    background:'linear-gradient(to right, rgb(109, 109, 109),  rgb(0, 0, 0))',
    color: "#ffffff"
    }
    ];

    let currentIndex = 0;

    function trocartema(){
  currentIndex = (currentIndex + 1) % gradients.length;
    const cxt = document.getElementById("caixatema")
    cxt.style.background = gradients[currentIndex].background;
    cxt.style.color = gradients[currentIndex].color;
    
    const temastatus = document.getElementById("temastatus");

    temastatus.classList.add("fade-out");

    setTimeout(() => {
        if (currentIndex === 0) {
        document.getElementById("temastatus").src = "images/sol.png";
        
    } else {
        document.getElementById("temastatus").src = "images/lua.png";
        
    }
    temastatus.classList.remove("fade-out");
}, 500);

}

  //ANIMAÇÃO NO PLACEHOLDER
 const input = document.getElementById("usertext");
  const input2 = document.getElementById("password");
  const phrase = "Usuário...";
  const phrase2 = "Senha...";
  let index = 0;
  
  function typeEffect() {
      if (index < phrase.length) {
      input.setAttribute("placeholder", phrase.substring(0, index + 1));
      index++;
      if (index < phrase2.length) {
          input2.setAttribute("placeholder", phrase2.substring(0, index + 1));
          index++;
      }
      setTimeout(typeEffect, 150);
      }else{
        setTimeout(() => {
          index = 0;
          typeEffect();
        }, 1000)
      
      
  }}
  typeEffect();























