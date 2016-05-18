### Algoritmo de Web Scraping


O **americanas-scrap** é um algoritmo utilizado para a obtenção de metadados relacionados à produtos da E-commerce Americanas à partir da URL.

É feita uma leitura padronizada dos elementos da página do produto e, desta forma, obtidos os dados relativos ao mesmo. Atualmente os dados drenados pelo algoritmo são: Nome, Preço e Thumbnail.

Este pacote é uma adaptação do **submarino-scrap**

#### Exemplo prático

```js
 var scrap = require('americanas-scrap');
 var url = "http://www.americanas.com.br/produto/123670442/smartphone-motorola-moto-g-3-geracao-dual-chip-desbloqueado-android-5.1-tela-hd-5-memoria-interna-8gb-4g-camera-13mp-processador-quad-core-1.4ghz-preto";
 
 scrap.getProduct(url).then(function(product) {
    console.log(product);
 }, function(err) {
    console.log(err);
 });

```

#### Objeto de resposta

```js
 { 
   title: 'Smartphone Motorola Moto G 3ª Geração Dual Chip Desbloqueado Android 5.1 Tela HD 5" Memória Interna 8GB 4G Câmera 13MP Processador Quad Core 1.4GHz - Preto',
   price: '899.0',
   thumbnail: 'http://iacom1-a.akamaihd.net/produtos/01/00/item/123670/4/123670442_1GG.jpg'
 }
```

#### Objeto de erro

```js
 { error: 'Cannot get product' }
```
