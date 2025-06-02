let userLogadoNome = JSON.parse(localStorage.getItem("usuarioLogado"));
let userMsg = document.getElementById("usermsg");
 
let formattedName = formatName(userLogadoNome.user);
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
}



userMsg.textContent = `Bem-Vindo, ${formattedName}!`;


const adicionarAlunoBtn = document.getElementById("adicionaralunos");
const cadastroAluno = document.querySelectorAll(".cadastroaluno");


adicionarAlunoBtn.addEventListener("click", alunoCadastro); 

function alunoCadastro() {
  cadastroAluno.forEach(function (cadastroAluno) {
    if(cadastroAluno.style.display === "none") {
      cadastroAluno.style.display = "block";
    }else {
      cadastroAluno.style.display = "none";
    }
  }
    )
}

//FUNÇÃO DE TROCAR TEMA DA PAGINA
const gradients = [
  {
    background:
      "linear-gradient(to right, rgb(255, 255, 255), rgb(51, 92, 115))",
    color: "#000000",
  },

  {
    background: "linear-gradient(to right, rgb(109, 109, 109),  rgb(0, 0, 0))",
    color: "#ffffff",
  },
];

let currentIndex = 0;

function trocartema() {
  currentIndex = (currentIndex + 1) % gradients.length;
  const cxt = document.getElementById("caixatema");
  cxt.style.background = gradients[currentIndex].background;
  cxt.style.color = gradients[currentIndex].color;

  const temastatus = document.getElementById("temastatus");

  temastatus.classList.add("fade-out");

  setTimeout(() => {
    if (currentIndex === 0) {
      document.getElementById("temastatus").src = "/images/sol.png";
    } else {
      document.getElementById("temastatus").src = "/images/lua.png";
    }
    temastatus.classList.remove("fade-out");
  }, 500);
}
