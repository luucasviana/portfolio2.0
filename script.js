

/* EFEITO PRA REVELAR COM O INICIO DA PÁGINA */

window.pgr = ScrollReveal();

pgr.reveal('.tag', { duration: 1000 });
pgr.reveal('.tag figcaption', { duration: 2500 });
pgr.reveal('.btn', { duration: 2500 });

/* EFEITO PRA REVELAR COM A ROLAGEM DA PÁGINA */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.sobre h3', { duration: 1000 });
sr.reveal('.sobre p', { duration: 1000 });
sr.reveal('.habilidade h3', { duration: 1000 });
sr.reveal('.habilidade ul i', { duration: 1000 });
sr.reveal('.lista h3', { duration: 1000 });
sr.reveal('.card', { duration: 1000 });
sr.reveal('.footer h3 ', { duration: 1000 });
sr.reveal('.footer i', { duration: 1000 });
sr.reveal('.rodape p', { duration: 1000 });


/* CONST PARA RETORNAR AO TOPO DA PAGINA */

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()