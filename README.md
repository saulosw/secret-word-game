# 🎮 Secret Word Game

O **Secret Word Game** é um jogo de adivinhação de palavras feito em React. Nele, o jogador tenta adivinhar uma palavra secreta, recebendo uma dica da categoria e acompanhando as letras já adivinhadas.

## 🚀 Funcionalidades

- Sistema de pontuação dinâmico
- Dicas baseadas na categoria da palavra
- Contador de tentativas restantes
- Interface amigável e interativa
- Reinício do jogo após o Game Over

## 🛠️ Tecnologias Utilizadas

- **React**: Para criar a interface do usuário e gerenciar os estados do jogo
- **CSS**: Para estilizar a interface de maneira simples e elegante
- **JavaScript (ES6+)**: Para gerenciar a lógica do jogo

## 📂 Estrutura do Projeto

- `App.js`: Componente principal que controla o fluxo do jogo.
- `Game.js`: Componente que exibe a tela do jogo, onde o jogador interage.
- `StartScreen.js`: Tela inicial, onde o jogador decide iniciar a partida.
- `GameOver.js`: Tela exibida ao final do jogo, mostrando a pontuação final e permitindo a reinicialização.
- `words.js`: Lista de palavras organizadas por categoria, que são usadas durante o jogo.

## 🎮 Como Jogar

1. **Iniciar o Jogo**: Ao iniciar, uma palavra secreta será selecionada aleatoriamente de uma categoria, como "frutas" ou "animais".
2. **Adivinhar Letras**: O jogador tem um número limitado de tentativas para adivinhar as letras que compõem a palavra.
3. **Pontuação**: A cada palavra adivinhada corretamente, o jogador ganha pontos.
4. **Fim de Jogo**: Se todas as tentativas forem usadas e a palavra não for descoberta, o jogo termina e a pontuação final é exibida.

## 🏁 Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/saulosw/secret-word-game.git

2. Navegue até o diretório do projeto:
   ```bash
   cd secret-word-game
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor do projeto:
   ```bash
   npm run dev

## 🤝 Contribuições
Sinta-se à vontade para abrir uma issue ou enviar um pull request se tiver sugestões de melhorias ou novas funcionalidades!
