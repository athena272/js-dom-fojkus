# Fokus ⏱️🎧

Projeto **Fokus** é uma aplicação web inspirada na técnica Pomodoro, desenvolvida para praticar **JavaScript moderno**, **manipulação de DOM**, **arquitetura modular** e **boas práticas de organização de código**.

O projeto permite alternar entre modos de foco e descanso, controlar um temporizador, tocar música de fundo e reproduzir efeitos sonoros de feedback.

---

## 📸 Funcionalidades

- ✅ Modos de tempo:
  - Foco
  - Descanso curto
  - Descanso longo
- ⏱️ Temporizador com:
  - Start / Pause
  - Reset automático ao trocar de modo
  - Exibição formatada `MM:SS`
- 🎵 Música de fundo com toggle (on/off)
- 🔊 Efeitos sonoros:
  - Play
  - Pause
  - Finalização do tempo
- 🎨 Interface dinâmica baseada em `data-context`
- ♿ Melhorias de acessibilidade (`aria-pressed`)
- 🧩 Código modular e escalável

---

## 🗂️ Estrutura do Projeto

```
js-dom-fojkus/
├── index.html
├── styles.css
├── images/
├── sounds/
└── src/
    └── js/
        ├── main.js
        └── ui/
            ├── dom.js
            ├── context.js
            ├── audio.js
            ├── sound-effects.js
            └── timer.js
```

---

## 🧠 Organização e Arquitetura

### `main.js`
Arquivo de entrada da aplicação.
- Inicializa os módulos
- Orquestra eventos
- Conecta contexto, timer e áudio

### `ui/dom.js`
Infraestrutura de DOM:
- Centraliza seletores
- Fornece helpers (`qs`, `qsa`)
- Evita repetição e erros silenciosos

### `ui/context.js`
Responsável por:
- Trocar o contexto (`focus`, `short-break`, `long-break`)
- Atualizar banner, título e estado ativo dos botões
- Sincronizar estado global via `data-context`

### `ui/timer.js`
Gerencia o temporizador:
- Contagem regressiva
- Start / Pause / Toggle
- Reset ao trocar de modo
- Callback ao finalizar (`onFinish`)

### `ui/audio.js`
Gerencia a música de fundo:
- Play / Pause via toggle
- Loop automático
- Sincronização entre UI e áudio

### `ui/sound-effects.js`
Efeitos sonoros curtos (SFX):
- Play
- Pause
- Beep ao finalizar
- Reproduz sons de forma segura e reiniciável

---

## ▶️ Como Executar

> **Importante:** use um servidor local para evitar problemas com áudio e ES Modules.

### Opção 1: Live Server (VS Code)
1. Instale a extensão **Live Server**
2. Clique com o botão direito no `index.html`
3. Selecione **Open with Live Server**

### Opção 2: Vite / outro servidor
Qualquer servidor estático funciona, desde que sirva os arquivos pela raiz do projeto.

---

## ⚙️ Configuração de Tempos

No arquivo `src/js/ui/timer.js`:

```js
const DEFAULT_DURATIONS = {
  focus: 25 * 60,
  "short-break": 5 * 60,
  "long-break": 15 * 60,
};
```

Durante o desenvolvimento, tempos menores podem ser usados para testes rápidos.

---

## 🚀 Possíveis Evoluções

- Persistir estado no `localStorage`
- Fluxo Pomodoro automático (foco → pausa)
- Ajuste de volume
- Atalhos de teclado
- Customização de tempos pelo usuário

---

## 📚 Aprendizados

Este projeto explora conceitos como:
- Event delegation
- Manipulação de atributos `data-*`
- Modularização em JavaScript
- Separação de responsabilidades
- Boas práticas de arquitetura frontend

---

## 🧑‍💻 Autor

Projeto desenvolvido como estudo prático a partir de aulas da **Alura**, com melhorias arquiteturais e organizacionais.

---

## 📄 Licença

Projeto fictício, sem fins comerciais.
