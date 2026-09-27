# Bible Adventure

Página de vendas (mobile-first) do mini app infantil **Bible Adventure** — US$ 7, pagamento único.

É um único arquivo estático: `index.html`. Não precisa de build nem de dependências.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000 (ou simplesmente dê dois cliques no `index.html`).

## Antes de publicar

1. **Checkout** — já configurado para https://pay.hotmart.com/L107791315O (`var CHECKOUT_URL` no fim do `index.html`). Parâmetros da URL da página (utm_*, src, sck) são repassados ao checkout.
2. **Depoimentos** — troque os textos `[REAL PARENT TESTIMONIAL HERE]` por depoimentos reais (com autorização).
3. **"REGULAR VALUE: $XX"** — só preencha se for um preço real já praticado; caso contrário, apague essa linha.
4. Revise as respostas do FAQ sobre acesso para refletir como você entrega o app.

## Publicar

Qualquer hospedagem estática serve: Vercel, Netlify ou GitHub Pages (Settings → Pages → branch `main`, pasta `/`).
