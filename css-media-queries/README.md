# Exemplo de CSS Media Query

Este exemplo demonstra como usar media queries em CSS para criar um layout responsivo que se adapta a diferentes tamanhos de tela.

## Como usar

1.  Abra o arquivo `index.html` no seu navegador.
2.  Redimensione a janela do navegador.
3.  Observe como o layout se adapta a diferentes tamanhos de tela. Quando a largura da janela for menor que 768px, os boxes serão exibidos um abaixo do outro.

## Explicação do código

*   **`index.html`:** Define a estrutura HTML da página.
    *   Inclui um título, um parágrafo e três divs com a classe `box`.
    *   A tag `<meta name="viewport" ...>` é importante para garantir que o layout responsivo funcione corretamente em dispositivos móveis.
*   **`style.css`:** Define os estilos CSS da página.
    *   Por padrão, os boxes são exibidos lado a lado em telas maiores.
    *   A media query `@media (max-width: 768px)` define estilos diferentes para telas menores que 768px de largura. Nesse caso, os boxes são exibidos um abaixo do outro.