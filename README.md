# Acessibilidade de fontes

Segue funções para auxiliar com a acessibilidade utilizando Javascript / biblioteca JQuery.

## Aumentar e Diminuir Fonte

Para inserir em seu site/sistema basta:

- inclua o script com a função de aumentar e diminuir a fonte.

`<script src="fonte.js"></script>`

- Inclua os botões dentro do seu código, no local onde deseja que seja posicionado esta funcionalidade.

```
<button onClick="fonte('a');">+</button>
<button onClick="fonte('d');">-</button>
```

- Agora adicione a class `.acessibilidade`, em todos os itens que você deseja que sejam contemplados pelo controle de fonte.

```
<p class="acessibilidade">
    Exemplo de texto com a class Acessibilidade;
</p>
```

### [Clique aqui e veja o código funcionando](https://fredericosetra.github.io/acessibilidadeFonte/)
