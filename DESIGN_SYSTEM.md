# VanGym — sistema visual

## Direção

O fluxo `--design-system --stack react-native` do UI/UX Pro Max recomenda uma linguagem vibrante, esportiva e em blocos, com hierarquia clara, CTAs de alto contraste e gamificação visível. Para este produto, a paleta exata do briefing é a fonte de verdade; os valores gerados pelo fluxo (laranja `#F97316`, verde `#22C55E` e escala escura) informam a direção, mas foram alinhados ao laranja VanGym `#FF6B2C`.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `background` | `#121316` | Fundo principal |
| `surface` | `#1C1E24` | Cartões, campos e navegação |
| `surfaceElevated` | `#252830` | Steppers, seleção e modais |
| `border` | `#2A2D36` | Bordas e divisores |
| `primary` | `#FF6B2C` | Ação principal e seleção |
| `primaryPressed` | `#E55A1F` | Pressionado |
| `success` | `#22C55E` | Calibrado/concluído |
| `successMuted` | `rgba(34,197,94,0.14)` | Fundo de estado concluído |
| `text` | `#F8FAFC` | Texto e números principais |
| `textSecondary` | `#94A3B8` | Rótulos e apoio |
| `textMuted` | `#64748B` | Dias e valores inativos |
| `danger` | `#F87171` | Erros |

## Tipografia

- Usar a família nativa do sistema para carregamento imediato e acessibilidade; títulos com peso 700, corpo 400–500 e rótulos 600.
- Escala: 12 (metadados), 14 (rótulo), 16 (corpo), 18 (subtítulo), 24 (título de seção), 30 (título principal), 36 (número de carga).
- Corpo com entrelinha de 1.45–1.6. Cargas e repetições usam `fontVariant: ['tabular-nums']` e peso 700.
- Nunca reduzir o texto de corpo abaixo de 16 px; permitir quebra de linha e aumento de fonte do sistema.

## Espaçamento e forma

- Grade de 4 px; valores de uso recorrente: 4, 8, 12, 16, 20, 24, 32 e 40.
- Margens horizontais 20 px, cartões com 16 px de padding e raio 16 px; controles com raio 12 px.
- Alvos tocáveis mínimos de 48 × 48 dp, com pelo menos 8 px entre controles adjacentes.
- Conteúdo rolável respeita safe areas e deixa espaço para a barra de abas.

## Movimento e estados

- Resposta tátil/visual imediata; transições curtas de opacidade/cor entre 150–220 ms.
- Respeitar `prefers-reduced-motion`/preferência de movimento do sistema; animação nunca bloqueia interação.
- Estados de foco, pressionado, desabilitado, erro e sucesso precisam ser explícitos, além da cor.

## Anti-padrões a evitar

- Não usar emojis como ícones; manter Lucide consistente e os sprites JPG como mascote.
- Não depender só de cor para comunicar estado, nem usar texto cinza de baixo contraste em conteúdo essencial.
- Não esconder rótulos dentro de placeholders; campos têm labels visíveis e erros junto ao campo.
- Não usar alvos pequenos, hover como único feedback, listas com rolagem horizontal ou conteúdo atrás da navegação fixa.
- Evitar excesso de cartões/badges, animação decorativa, tipografia abaixo de 12 px e qualquer substituição genérica do rato pixel art.
