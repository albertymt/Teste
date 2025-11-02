// Espera o formulário ser carregado antes de funcionar
document.addEventListener("DOMContentLoaded", function() {
    // Pega o formulário pelo elemento <form>
        const form = document.querySelector("form");

            // Quando o formulário for enviado...
                form.addEventListener("submit", function(event) {
                        event.preventDefault(); // Impede o envio real (não recarrega a página)

                                // Pega o nome digitado (opcional)
                                        const nome = document.getElementById("nome").value;

                                                // Exibe uma mensagem de sucesso
                                                        alert("✅ Formulário enviado com sucesso!\nObrigado, " + nome + "!");

                                                                // Limpa o formulário depois do envio
                                                                        form.reset();
                                                                            });
                                                                            });