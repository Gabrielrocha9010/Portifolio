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

  window.addEventListener('scroll', ()=>{
     let rolar_pra_baixo = scrollY;
     let deslocamento = rolar_pra_baixo * 2;

     let opacidade = 1 - (rolar_pra_baixo / 200);
    paralax.style.transform = `translateY(${deslocamento}px)`;
    paralax.style.opacity = Math.max(opacidade, 0);
  });