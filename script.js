const form = document.getElementById("formContato");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;

    status.textContent = `Mensagem enviada com sucesso, ${nome}! 🚀`;
    form.reset(); 
});