// Adiciona a classe 'in-view' às seções adicionais quando estão visíveis na tela
document.addEventListener("DOMContentLoaded", function () {
    var categories = document.querySelectorAll(".category");
    var descricaoCategoria;

    function isInView(element) {
        var rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function checkCategories() {
        categories.forEach(function (category) {
            if (isInView(category)) {
                category.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", checkCategories);
    window.addEventListener("resize", checkCategories);

    // Verifica as seções adicionais quando a página é carregada
    checkCategories();
});

// Função para exibir o pop-up
function exibirPopup(categoria) {
var popupContainer = document.getElementById('popup-container');
var popupContent = document.getElementById('popup-content');

// Descrição de cada categoria
switch (categoria) {
case 'Língua Inglesa':
    descricaoCategoria = 'Inglês é uma língua germânica ocidental que se originou nos reinos anglo-saxões da Inglaterra.';
    break;
case 'Psicopedagogia':
    descricaoCategoria = 'Psicopedagogia é uma área de estudo que une a psicologia e a pedagogia, focando no processo de aprendizagem.';
    break;
    case 'Música':
    descricaoCategoria = 'Aulas de instrumentos diversos.';
    break;
    case 'Clube do Livro':
    descricaoCategoria = 'Encontros semanais para discussão de textos e livros diversos';
    break;
// Adicione mais casos conforme necessário para outras categorias
default:
    descricaoCategoria = 'Algumas informações interessantes sobre ' + categoria + '.';
}

// conteúdo dinâmico ao pop-up com base na categoria clicada
popupContent.innerHTML = `
<h3>${categoria}</h3>
<p>${descricaoCategoria}</p>
<button onclick="fecharPopup()">Fechar</button>
`;

// Exibe o pop-up
popupContainer.style.display = 'flex';
}

// Função para fechar o pop-up
function fecharPopup() {
var popupContainer = document.getElementById('popup-container');
popupContainer.style.display = 'none';
}

// Adicione uma função para exibir o pop-up do formulário
function exibirFormPopup() {
    var formPopupContainer = document.getElementById('form-popup-container');
    var formPopupContent = document.getElementById('form-popup-content');

    // Exibe o pop-up do formulário
    formPopupContainer.style.display = 'flex';
}

// Adicione uma função para fechar o pop-up do formulário
function fecharFormPopup() {
    var formPopupContainer = document.getElementById('form-popup-container');
    formPopupContainer.style.display = 'none';
}

// Adicione um ouvinte de eventos para chamar a função ao clicar no botão "Comece Já"
var botaoComeceJa = document.getElementById('botao-comece-ja');
botaoComeceJa.addEventListener('click', exibirFormPopup);