const dark = document.getElementById("troca");

dark.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

const letraColorida = document.querySelectorAll("header nav li a");

letraColorida.forEach(function(event){
    event.addEventListener("click", function(){

        letraColorida.forEach(function(outrasLetras) {
            outrasLetras.classList.remove("blue");
        });

        event.classList.add("blue");
    });
});


if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const luz = document.getElementById('mouse-luz');
    
    window.addEventListener('pointermove', evento => {

      luz.style.left = evento.clientX + 'px';
      luz.style.top = evento.clientY + 'px';

      document.body.classList.add('mouse-ativo');

    },
    { passive: true });
    document.addEventListener('mouseleave', () => document.body.classList.remove('mouse-ativo'));
  }

  const paralax = document.getElementById('img-eu');

if (paralax) {
  window.addEventListener('scroll', () => {
    let rolar_pra_baixo = window.scrollY;
    
    let deslocamento = rolar_pra_baixo * 0.3;
    
    let deslocamento_limitado = Math.min(deslocamento, 150);

    let opacidade = 1 - (rolar_pra_baixo / 400);

   
    paralax.style.transform = `translateY(${deslocamento_limitado}px)`;
    paralax.style.opacity = Math.max(opacidade, 0);
  }); 
}

function mostrarMensagem(idMensagem) {
    const elemento = document.getElementById(idMensagem);
    
   
    if (elemento) {
        elemento.innerText = "Nada ainda foi adicionado.";
        
        setTimeout(() => {
            elemento.innerText = "";
        }, 3000); 
    }
}

function copiarEmail(event) {
    event.preventDefault(); 
    navigator.clipboard.writeText("gabrielnetwork90@gmail.com");
    const aviso = document.getElementById("aviso-copiado");
    if (aviso) {
        aviso.innerText = "E-mail copiado!";       
        setTimeout(() => {
            aviso.innerText = "";
        }, 3000);
    }
  setTimeout(() => {
        window.open("https:gabrielnetwork90@gmail.com", "_blank");
    }, 500);
}



