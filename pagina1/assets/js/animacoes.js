// Suaviza o scroll ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });                                                                         
        }
    });
});

// Efeito de animação para as seções ao rolar para cima
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-from-bottom');
        } else {
            entry.target.classList.remove('show-from-bottom');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('main > section').forEach(section => {
    section.classList.add('hidden-section');
    observer.observe(section);
});

// Animação de surgimento do nav ao abrir o site
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        setTimeout(() => {
            nav.classList.add('nav-ativo');
        }, 800); // atraso maior para suavizar mais
    }
});

// Animação de digitação no título com cursor e efeito de apagar
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-principal');
    const texto = "Bem-vindo ao projeto Mentes Conectadas";
    const cursorHTML = `<span class="typing-cursor"></span>`;
    let escrevendo = true;
    let i = 0;

    function digitar() {
        if (i <= texto.length) {
            titulo.innerHTML = texto.slice(0, i) + cursorHTML;
            i++;
            setTimeout(digitar, 60);
        } else {
            setTimeout(apagar, 1200);
        }
    }

    function apagar() {
        if (i > 0) {
            i--;
            titulo.innerHTML = texto.slice(0, i) + cursorHTML;
            setTimeout(apagar, 30);
        } else {
            setTimeout(digitar, 600);
        }
    }

    digitar();
});

// Animação do fundo da seção sobre ao rolar
document.addEventListener('DOMContentLoaded', () => {
    const sobreSection = document.querySelector('.sobre');
    if (sobreSection) {
        const sobreBgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sobreSection.classList.add('sobre-bg-animada');
                } else {
                    sobreSection.classList.remove('sobre-bg-animada');
                }
            });
        }, { threshold: 0.1 });
        sobreBgObserver.observe(sobreSection);
    }
});

