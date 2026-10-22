# Portfólio · Lucas de Mélo Berra

Página pessoal com projetos públicos e privados, experiência e contato, em **português** (padrão) e **inglês**.

**Ao vivo:** https://lukinas1417.github.io/

## Como funciona

- HTML, CSS e JavaScript puros, sem build e sem dependências.
- O HTML já traz o português, então a página funciona sem JavaScript. O inglês está em `src/app.js`, no objeto `EN`,
  com as mesmas chaves dos atributos `data-i18n` do HTML.
- O botão PT/EN lembra a escolha do visitante. O link `?lang=en` abre direto a versão em inglês.
- As fontes ficam em `assets/fonts` (sem Google Fonts). O visual segue o do [Radar de Chuva RS](https://github.com/lukinas1417/radar-chuva-rs).

## Editar o conteúdo

| O quê | Onde |
|---|---|
| Textos em português | `index.html` |
| Textos em inglês | `src/app.js` (objeto `EN`, mesma chave do `data-i18n`) |
| Foto | `assets/foto-perfil.png` |
| Currículos (PDF) | `assets/curriculo-lucas-berra-pt.pdf` e `assets/resume-lucas-berra-en.pdf` |
| Cores e tipografia | variáveis no topo de `src/style.css` |

Ao mudar um texto em português, atualize a mesma chave no objeto `EN`.

## Ver localmente

```sh
node serve.mjs   # http://localhost:8080
```

## Publicação

GitHub Pages, a partir da branch `main` (raiz do repositório).

## Sobre os projetos privados

Os projetos privados são descritos pelo problema e pela stack, sem expor dados internos, clientes ou código.
