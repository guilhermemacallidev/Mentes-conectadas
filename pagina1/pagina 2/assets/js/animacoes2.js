// Suaviza o scroll ao clicar nos links do menu
const botoes = document.querySelectorAll(".acordeao-titulo");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {

        // Fecha todos os outros
        document.querySelectorAll(".acordeao-conteudo").forEach(sec => {
            if (sec !== btn.nextElementSibling) {
                sec.style.display = "none";
            }
        });

        // Abre ou fecha o clicado
        const conteudo = btn.nextElementSibling;

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
        } else {
            conteudo.style.display = "block";
        }
    });
});
