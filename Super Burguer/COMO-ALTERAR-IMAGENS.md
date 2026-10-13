# Onde trocar cada imagem

## Logo, banner principal e banner de combos
Abra `js/config.js` e localize `imagens`:

```js
imagens: {
  logo: 'assets/img/logo.png',
  favicon: 'assets/img/favicon.png',
  hero: 'assets/img/banner-principal.webp',
  combos: 'assets/img/banner-combos.webp'
}
```

Substitua o arquivo correspondente dentro de `assets/img/` ou edite apenas o caminho desejado.

## Fotos dos quatro produtos em destaque
Abra `js/produtos.js`. Cada produto possui sua própria propriedade `imagem`.
Mude **apenas a propriedade `imagem` do produto desejado**.

As fotos são geradas na seção de destaques pelo arquivo `js/script.js`; por isso não aparecem como tags `<img>` individuais no `index.html`.

## Importante
A pasta `assets/img` não existia no ZIP original: inclua suas fotos com os nomes referenciados no código.
O `index.html` foi reorganizado e comentado; os outros arquivos funcionais foram mantidos.
