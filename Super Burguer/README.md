# Super Burguer — demonstração Reinado Digital

Site estático HTML/CSS/JavaScript sem dependências de compilação, com cardápio, personalização, carrinho e pedido por WhatsApp.

## Executar
1. Abra a pasta `super-burguer` no VS Code.
2. Instale a extensão Live Server e abra `index.html` com **Open with Live Server**.
3. Teste também `cardapio.html` diretamente.

## Personalizar para outro cliente
- **Nome, WhatsApp, endereço, Maps, Instagram, taxa de entrega (centavos), horários e textos:** `js/config.js`.
- **Produtos, preços em centavos, adicionais e categorias:** `js/produtos.js`.
- **Cores:** variáveis no início de `css/style.css`.
- **Logo e favicon:** substitua `assets/img/logo.png` e `assets/img/favicon.png`.
- **Fotos independentes:** coloque os arquivos `banner-principal.webp`, `banner-combos.webp` e `destaque-01.webp` até `destaque-04.webp` na pasta `assets/img`. Cada produto aponta para sua própria imagem em `js/produtos.js`. A falta de uma foto não quebra o layout.
- **Crédito da agência:** `creditoAgencia` em `js/config.js`.
- **Horário:** dias de domingo (índice 0) a sábado (6), com `null` para fechado. `24:00` significa meia-noite do dia seguinte. Para funcionar após meia-noite, use por exemplo `['18:00','26:00']` (até 02h do dia seguinte).
- **Pedido antecipado:** `pedidosAntecipados` em `js/config.js`.

## Cloudflare Pages
Crie um repositório GitHub contendo os arquivos da pasta `super-burguer` na raiz. No Cloudflare Pages, conecte o repositório, escolha **nenhum framework**, deixe **Build command** vazio e **Build output directory** vazio ou `.` (conforme o formulário). Publique. Teste as rotas `index.html` e `cardapio.html` e configure o domínio em **Custom domains**.

## Notas importantes
- Projeto demonstrativo; produtos e preços fictícios.
- Não há backend nem confirmação automática do envio. A mensagem é enviada somente quando o cliente toca em enviar no WhatsApp. O cliente confirma manualmente antes de limpar o carrinho.
- Os identificadores de pedidos são demonstrativos e não são uma sequência global.
- O armazenamento local guarda somente o carrinho. Dados de checkout não são salvos permanentemente.
- O pedido é aberto via `wa.me` e pode ser bloqueado por pop-ups; nesse caso aparece link alternativo.
- Teste a interface em 320, 375, 390, 430, 768, 1024 e 1440 px. Teste também horário, pedidos indisponíveis, entrega/retirada, dinheiro/troco, adicionais diferentes e atualização de página.
- Os arquivos de imagem não acompanham o pacote: adicione fotos próprias/licenciadas. Não utilize imagens de terceiros sem autorização.
