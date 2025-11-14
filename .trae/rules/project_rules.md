O app deve ser apenas para Androis e IOS!

Documentação e Estrutura: App Pollar
Este documento descreve a arquitetura, o fluxo de navegação e a estrutura de componentes para o aplicativo de catálogo de frigoríficos, câmaras frias e peças, utilizando React Native e Expo.
1. Visão Geral do Aplicativo
O objetivo é criar um catálogo consultivo onde usuários possam encontrar modelos e peças de equipamentos de refrigeração, filtrando por marcas e visualizando detalhes técnicos. O aplicativo possui sistema de favoritos, alternância de tema (claro/escuro) e uma experiência totalmente responsiva.
2. Paleta de Cores e Tema
Tema Claro (Padrão)

Primário Escuro: #5086c1 (Azul principal)
Primário: #6a9eda (Azul médio)
Primário Claro: #84b6f4 (Azul claro)
Secundário: #b2dafa (Azul pastel claro)
Terciário: #dcffff (Azul muito claro/quase branco)
Fundo: #ffffff (Branco)
Texto Principal: #333333 (Cinza escuro)
Texto Secundário: #666666 (Cinza médio)

Tema Escuro

Fundo Primário: #1a1a1a (Preto suave)
Fundo Secundário: #2d2d2d (Cinza escuro)
Fundo Card: #3a3a3a (Cinza médio)
Primário: #6a9eda (Azul médio - mantém identidade)
Primário Destaque: #84b6f4 (Azul claro para destaques)
Texto Principal: #f5f5f5 (Branco suave)
Texto Secundário: #b0b0b0 (Cinza claro)
Borda: #4a4a4a (Cinza para divisores)

Sistema de Tema
O aplicativo deve implementar um contexto global (ThemeContext) que:

Armazena o tema atual (claro/escuro)
Fornece função para alternar entre temas
Persiste a preferência do usuário localmente
Aplica as cores dinamicamente em todos os componentes

3. Fluxo de Navegação (React Navigation)
O aplicativo terá um fluxo de navegação principal baseado em "Stack" (pilha de telas).
TelaInicial (Ponto de partida)

Ao clicar em uma Marca → vai para TelaConsultaModelos (enviando o ID da marca)
Ao clicar em uma Novidade → vai para TelaDetalheModelo (enviando o ID do modelo)
Ao clicar em um Favorito → vai para TelaDetalheModelo (enviando o ID do modelo)

TelaConsultaModelos

Ao clicar em um Modelo → vai para TelaDetalheModelo (enviando o ID do modelo)
Ao favoritar um modelo → atualiza o estado global de favoritos

TelaDetalheModelo

Ao favoritar/desfavoritar → atualiza o estado global de favoritos
O usuário pode voltar para a tela anterior

4. Estrutura de Pastas (Arquitetura)
Uma estrutura organizada facilita a manutenção.
src/
├── assets/
│   ├── images/ (ex: logos das marcas, imagens de modelos)
│   └── icons/ (ícones do app)
├── components/ (Componentes reutilizáveis)
│   ├── AnuncioCarousel.js (Carrossel de anúncios)
│   ├── AppHeader.js (Header global com título e botão de tema)
│   ├── DayCard.js (Card com dia da semana, data e frase)
│   ├── FavoritosCarousel.js (Carrossel de favoritos)
│   ├── MarcaGrid.js (Grid de marcas)
│   ├── SearchHeader.js (Barra de busca e filtros)
│   ├── ModeloCard.js (Card de modelo com favorito)
│   └── SpecificationTable.js (Tabela de especificações)
├── contexts/
│   ├── ThemeContext.js (Gerenciamento de tema claro/escuro)
│   └── FavoritosContext.js (Gerenciamento de favoritos)
├── navigation/
│   └── AppNavigator.js (Configuração do React Navigation)
├── screens/ (Telas principais)
│   ├── TelaInicial.js
│   ├── TelaConsultaModelos.js
│   └── TelaDetalheModelo.js
├── data/ (Dados mocados ou configuração de API)
│   ├── marcas.js
│   ├── modelos.js
│   └── frases.js (Frases diárias sobre refrigeração)
└── constants/
    └── theme.js (Definição de cores, fontes, tamanhos)
5. Responsividade
CRÍTICO: Todo o aplicativo deve ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

Grid de Marcas: Deve ajustar o número de colunas baseado na largura da tela (mínimo 2, máximo 4 colunas)
Grid de Modelos: Sempre exibir exatamente 2 colunas lado a lado, com altura adaptável
Cards de Modelo: Dimensões proporcionais usando porcentagens e Dimensions do React Native
Carrosséis: Largura dos itens deve ser calculada dinamicamente
Textos: Usar escala de fontes responsiva (PixelRatio ou biblioteca como react-native-responsive-fontsize)
Espaçamentos: Usar valores proporcionais à tela, não fixos
Header: Altura e padding ajustáveis para diferentes dispositivos

Implementação de Responsividade
javascriptimport { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Funções auxiliares
const wp = (percentage) => (SCREEN_WIDTH * percentage) / 100;
const hp = (percentage) => (SCREEN_HEIGHT * percentage) / 100;
```

## 6. Detalhamento das Telas

### Tela 1: TelaInicial.js (Tela Inicial)

É a porta de entrada do app.

**Propósito**: Apresentar o dia atual, favoritos, marcas e anúncios em formato de carrossel.

#### Estrutura Visual (de cima para baixo):

1. **AppHeader** (Componente Global)
   - **Layout**: Flexbox com `justifyContent: 'space-between'`
   - **Esquerda**: Título do App "Pollar" (ou nome escolhido)
   - **Direita**: Botão de alternância de tema (ícone de sol/lua)
   - **Estilo**: Fundo com cor primária do tema, texto branco
   - **Altura**: Responsiva (aproximadamente 8-10% da altura da tela)
   - **Nota**: Este header deve estar presente em **todas as telas**

2. **DayCard** (Card de Dia/Data/Frase)
   - **Layout**: Card centralizado com padding
   - **Conteúdo**:
     - Linha 1: Dia da semana (ex: "Sexta-feira") - fonte maior, negrito
     - Linha 2: Data completa (ex: "14 de Novembro de 2025") - fonte média
     - Linha 3: Frase motivacional/técnica relacionada a refrigeração - fonte menor, itálico
   - **Exemplos de frases**:
     - "A temperatura ideal mantém a qualidade preservada"
     - "Tecnologia que resfria, qualidade que permanece"
     - "Cada grau importa na conservação perfeita"
   - **Estilo**: Card com sombra suave, bordas arredondadas, cores do tema

3. **FavoritosCarousel** (Carrossel de Favoritos)
   - **Título**: "Seus Favoritos" ou "Modelos Favoritos"
   - **Layout**: Carrossel horizontal (ScrollView ou FlatList horizontal)
   - **Conteúdo**: Cards dos modelos favoritados pelo usuário
   - **Comportamento**: 
     - Se não houver favoritos, mostrar mensagem "Nenhum favorito ainda"
     - Cada item deve ser clicável e levar para TelaDetalheModelo
     - Ícone de coração preenchido visível em cada card
   - **Dimensões**: Cards responsivos, largura aproximada de 60-70% da tela
   - **Nota**: Os favoritos são gerenciados globalmente via FavoritosContext

4. **MarcaGrid** (Grid de Marcas)
   - **Título**: "Marcas"
   - **Layout**: Grid responsivo com 2-4 colunas (dependendo da largura da tela)
   - **Conteúdo**: Ícones/logos das marcas (Eletrolux, Brastemp, etc.)
   - **Cada item**:
     - Área quadrada ou retangular
     - Logo da marca centralizada
     - Nome da marca abaixo (opcional)
     - Efeito de pressão ao tocar
   - **Estilo**: Cards com borda ou fundo suave, sombra leve

5. **AnuncioCarousel** (Carrossel de Anúncios)
   - **Título**: "Novidades" ou "Destaques"
   - **Layout**: Carrossel horizontal com autoplay (opcional)
   - **Conteúdo**: Modelos selecionados aleatoriamente a cada entrada na tela
   - **Cada item**:
     - Imagem do modelo em destaque
     - Nome e código do modelo sobreposto
     - Ao clicar, leva direto para TelaDetalheModelo
   - **Dimensões**: Cards grandes, largura de 80-90% da tela
   - **Indicadores**: Dots indicadores de posição no carrossel

#### Fluxo de Ações:

- **Ao clicar em uma Marca** (do MarcaGrid):
  - Navega para TelaConsultaModelos
  - Passa parâmetro: `{ marca: 'Eletrolux' }`
  - A tela de consulta abre com filtro pré-aplicado

- **Ao clicar em um Favorito** (do FavoritosCarousel):
  - Navega diretamente para TelaDetalheModelo
  - Passa parâmetro: `{ modeloId: 'ABC-123' }`

- **Ao clicar em uma Novidade** (do AnuncioCarousel):
  - Navega diretamente para TelaDetalheModelo
  - Passa parâmetro: `{ modeloId: 'XYZ-789' }`

- **Ao clicar no botão de tema** (no AppHeader):
  - Alterna entre tema claro e escuro
  - Atualiza todas as cores do app instantaneamente
  - Persiste a preferência do usuário

---

### Tela 2: TelaConsultaModelos.js (Consultar Modelos)

Esta é a tela principal de busca e filtragem. É uma tela reutilizável.

**Propósito**: Listar todos os modelos e peças em grid responsivo de 2 colunas, permitindo busca, filtragem e favoritar.

#### Estrutura Visual (de cima para baixo):

1. **AppHeader** (Mesmo componente global da TelaInicial)
   - Título do app + botão de tema

2. **SearchHeader** (Header de Busca e Filtro)
   - **Layout**: Barra horizontal com elementos lado a lado
   - **Componentes**:
     - **Título**: "Consultar Modelos" (pode ser fixo ou dinâmico)
     - **Barra de Pesquisa**: Input de texto integrado
       - Placeholder: "Buscar modelo..."
       - Ícone de lupa
       - Atualização em tempo real
     - **Botão de Filtro**: Ícone de filtro (funil)
       - Ao clicar, abre modal ou drawer com opções de filtro
   - **Estilo**: Fundo secundário do tema, bordas arredondadas

3. **Grid de Modelos** (FlatList com 2 colunas)
   - **Layout**: Grid fixo de 2 colunas (`numColumns={2}`)
   - **Responsividade**: Largura de cada card = (largura da tela - gaps) / 2
   - **Cada item** (ModeloCard):

#### ModeloCard - Estrutura Detalhada:

**Proporções do Card**:
- **Área da Imagem**: 40-50% da altura total do card
- **Área de Informações**: 50-60% da altura total do card

**Camadas do Card**:

1. **Camada de Imagem** (Superior - 40-50% do card)
   - Imagem do modelo ocupando toda a área
   - Proporção mantida (cover ou contain)
   - **Botão de Favorito** (Sobreposto no canto superior direito):
     - Ícone de coração
     - **Estado NÃO favoritado**: Coração com borda (outline), fundo transparente ou semi-transparente
     - **Estado favoritado**: Coração preenchido com cor de destaque (ex: vermelho ou cor primária)
     - Área de toque expandida para facilitar clique
     - Animação ao favoritar (scale ou fade)

2. **Camada de Informações** (Inferior - 50-60% do card)
   - **Linha 1 - Nome**: Texto maior, negrito
     - Ex: "Geladeira Frost Free"
   - **Linha 2 - Modelo e Tipo**: Texto médio
     - Formato: `{código_modelo} - {tipo}`
     - Ex: "DFN41 - Refrigerador"
   - **Linha 3 - Especificações**: Texto menor, cinza
     - Exibir as principais especificações em formato compacto:
     - Ex: "220V • 450W • 180x60x65cm"
     - Usar bullet points (•) para separar
     - Mostrar: Voltagem, Consumo, Dimensões (resumido)

**Estilo do Card**:
- Fundo: Card branco (tema claro) ou cinza escuro (tema escuro)
- Borda: Sutil ou sombra leve
- Bordas arredondadas
- Padding interno adequado para informações
- Margin entre cards para respiração

**Comportamento**:
- **Toque no card**: Navega para TelaDetalheModelo
- **Toque no coração**: Adiciona/remove dos favoritos (sem navegar)
- **Feedback visual**: Leve opacidade ao pressionar o card

#### Estado Inicial:
- Esta tela recebe parâmetros opcionais da tela anterior
- **Exemplo**: `{ marca: 'Eletrolux' }` → Lista já vem filtrada
- Sem parâmetros → Mostra todos os modelos

#### Fluxo de Ações:

- **Ao digitar na Barra de Pesquisa**:
  - Filtragem em tempo real
  - Lista atualiza mostrando apenas resultados correspondentes
  - Busca por: nome, modelo, tipo, especificações

- **Ao clicar no Botão de Filtro**:
  - Abre modal/drawer com opções:
    - Filtrar por marca (checkboxes múltiplos)
    - Filtrar por tipo (refrigerador, freezer, câmara fria, etc.)
    - Filtrar por voltagem
    - Ordenar (mais recente, A-Z, favoritos primeiro)
    - Botão "Limpar Filtros"
    - Botão "Aplicar"
  - Permite que usuário mude/remova filtros aplicados

- **Ao clicar no coração de um modelo**:
  - Adiciona/remove modelo dos favoritos
  - Atualiza contexto global (FavoritosContext)
  - Atualiza o FavoritosCarousel na TelaInicial
  - Animação visual de confirmação

- **Ao clicar em um Modelo** (área do card, exceto coração):
  - Navega para TelaDetalheModelo
  - Passa parâmetro: `{ modeloId: 'XYZ-789' }`

---

### Tela 3: TelaDetalheModelo.js (Detalhes do Modelo)

Esta é a tela final, que exibe todos os dados técnicos. É uma tela template padronizada.

**Propósito**: Exibir informações completas e detalhadas de um modelo específico.

#### Estrutura Visual (de cima para baixo):

1. **AppHeader** (Mesmo componente global)
   - Título do app + botão de tema

2. **Header do Modelo**
   - **Imagem Principal**: Imagem grande do modelo (30-40% da tela)
   - **Botão de Favorito**: Coração no canto (mesma lógica do card)
   - **Nome Completo**: Fonte grande, negrito
   - **Código do Modelo**: Fonte média, cor secundária
   - **Tipo**: Badge ou tag (ex: "Refrigerador", "Freezer")

3. **Seção de Especificações Gerais**
   - **Título**: "Especificações Técnicas"
   - **Layout**: Lista ou grid de informações
   - **Itens**:
     - Voltagem (ex: "220V / 110V")
     - Consumo (ex: "450W")
     - Dimensões completas (ex: "Altura: 180cm, Largura: 60cm, Profundidade: 65cm")
     - Peso
     - Capacidade (litros ou outra medida)
     - Classe energética
     - Qualquer outra especificação relevante

4. **SpecificationTable** (Tabela de Temperaturas)
   - **Título**: "Faixas de Temperatura"
   - **Layout**: Tabela formatada
   - **Colunas**: Tipo de compartimento, Temperatura Min, Temperatura Max
   - **Exemplo**:
```
     Refrigerador:  2°C a 8°C
     Freezer:      -18°C a -12°C

Seção de Componentes (NOVA)

Título: "Componentes do Sistema"
Layout: Lista ou cards de componentes
Itens (cada um com formato: Nome do Componente: Modelo específico):

Compressor: {modelo do compressor}

Ex: "Compressor: Embraco FFI12HBX"


Ventilador: {modelo do ventilador}

Ex: "Ventilador: EBM-PAPST W2E200-HH38"


Termostato: {modelo do termostato}

Ex: "Termostato: Danfoss 077B6"


Condensador: {modelo do condensador}

Ex: "Condensador: Condensador Aletado 2000BTU"


Evaporador: {modelo do evaporador}

Ex: "Evaporador: Evaporador Placa 180L"




Estilo: Cards ou lista com ícones representando cada componente
Nota: Se um componente não tiver modelo específico disponível, mostrar "Não especificado" ou ocultar o item


Seção de Particularidades

Título: "Características Especiais"
Layout: Texto corrido ou lista de bullet points
Conteúdo:

Descrição de características únicas
Tecnologias especiais (ex: "Sistema Frost Free")
Observações técnicas
Peças de reposição associadas
Compatibilidades





Estado Inicial:

Recebe parâmetro obrigatório: { modeloId: 'ABC-123' }
Usa esse ID para buscar todas as informações do modelo (API ou dados locais)
Se modelo não encontrado, exibe mensagem de erro

Fluxo de Ações:

Ao clicar no coração (favoritar/desfavoritar):

Adiciona/remove dos favoritos
Atualiza contexto global
Animação visual de confirmação
Não navega, permanece na tela


Botão Voltar (nativo ou customizado):

Retorna para a tela anterior (TelaInicial ou TelaConsultaModelos)
Mantém o estado de favoritos atualizado


Compartilhar (opcional):

Botão para compartilhar informações do modelo
Pode gerar texto formatado ou link




7. Contextos Globais
ThemeContext
javascript// Gerencia tema claro/escuro
const ThemeContext = createContext();

// Fornece:
- theme: 'light' | 'dark'
- colors: objeto com todas as cores ativas
- toggleTheme: função para alternar
- isDark: boolean helper
FavoritosContext
javascript// Gerencia lista de favoritos
const FavoritosContext = createContext();

// Fornece:
- favoritos: array de IDs dos modelos favoritados
- isFavorito: (modeloId) => boolean
- toggleFavorito: (modeloId) => void
- limparFavoritos: () => void

8. Implementação de Favoritos
Estrutura de Dados
javascript// Armazenamento local (AsyncStorage)
{
  "favoritos": ["ABC-123", "XYZ-789", "DFN-41"]
}
Comportamento

Favoritos são persistidos localmente
Sincronização entre todas as telas
Animação ao favoritar/desfavoritar
Atualização imediata dos carrosséis e listas


9. Dados e Estrutura de Modelos
Estrutura de um Modelo (exemplo)
javascript{
  id: "ABC-123",
  nome: "Geladeira Frost Free",
  codigo: "DFN41",
  tipo: "Refrigerador",
  marca: "Eletrolux",
  imagem: "url_da_imagem",
  especificacoes: {
    voltagem: "220V",
    consumo: "450W",
    dimensoes: {
      altura: "180cm",
      largura: "60cm",
      profundidade: "65cm"
    },
    peso: "85kg",
    capacidade: "380L",
    classeEnergetica: "A+"
  },
  temperaturas: {
    refrigerador: { min: 2, max: 8 },
    freezer: { min: -18, max: -12 }
  },
  componentes: {
    compressor: "Embraco FFI12HBX",
    ventilador: "EBM-PAPST W2E200-HH38",
    termostato: "Danfoss 077B6",
    condensador: "Condensador Aletado 2000BTU",
    evaporador: "Evaporador Placa 180L"
  },
  particularidades: "Sistema Frost Free, Controle eletrônico de temperatura..."
}

10. Observações Finais

Responsividade é CRÍTICA: Todos os componentes devem adaptar-se perfeitamente a diferentes tamanhos de tela
Consistência Visual: Manter o AppHeader e o sistema de tema em todas as telas
Performance: Otimizar imagens e listas longas (usar FlatList com virtualização)
Acessibilidade: Considerar tamanhos de fonte acessíveis e contraste adequado
Feedback Visual: Sempre fornecer feedback ao usuário (loading, animações, confirmações)
Testes: Testar fluxo completo em diferentes cenários (com/sem favoritos, com/sem filtros)