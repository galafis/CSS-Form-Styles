# CSS Form Styles

[![Status do Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/galafis/CSS-Form-Styles/actions) [![Licença MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue)](https://galafis.github.io/CSS-Form-Styles/public/index.html)

[English](#en-us) | [Português](#pt-br)

---

<a name="pt-br"></a>

## 🇧🇷 Português

## 🖼️ Imagem Hero

![CSS Form Styles Hero Image](assets/hero_image.png)

## Descrição

**CSS Form Styles** é uma biblioteca de estilos CSS moderna e profissional, desenvolvida por Gabriel Demetrios Lafis, para aprimorar a aparência e a usabilidade de formulários web. Este projeto oferece um conjunto abrangente de componentes de formulário estilizados, prontos para serem integrados em qualquer projeto HTML, garantindo uma experiência de usuário consistente e visualmente atraente.

## Funcionalidades

*   **Estilos Profissionais**: Design limpo e moderno para todos os elementos de formulário.
*   **Responsividade**: Otimizado para funcionar perfeitamente em dispositivos de todos os tamanhos.
*   **Fácil de Usar**: Integração simples com qualquer projeto HTML.
*   **Componentes Abrangentes**: Estilos para inputs de texto, selects, checkboxes, radio buttons, textareas, file inputs, inputs de senha com toggle, inputs de range e botões.
*   **Estados de Validação**: Suporte visual para estados de sucesso e erro.
*   **Acessibilidade**: Foco na usabilidade e acessibilidade, incluindo `focus-visible`.

## Demonstração

Visualize os estilos em ação na [página de demonstração](https://galafis.github.io/CSS-Form-Styles/public/demo.html).

## Instalação

Para utilizar os estilos em seu projeto, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/galafis/CSS-Form-Styles.git
    ```

2.  **Copie os arquivos:**
    Copie o arquivo `styles.css` da pasta `src/` e `script.js` para o diretório de estilos/scripts do seu projeto.

3.  **Link no seu HTML:**
    Adicione as seguintes linhas no `<head>` e antes do fechamento do `</body>` do seu arquivo HTML:

    ```html
    <link rel="stylesheet" href="path/to/your/styles.css">
    <!-- No final do body, antes de </body> -->
    <script src="path/to/your/script.js"></script>
    ```

## Uso

Os estilos são aplicados automaticamente aos elementos de formulário com as classes CSS apropriadas. Consulte o arquivo `public/demo.html` para exemplos de uso de cada componente.

### Exemplo de Input de Texto

```html
<div class="form-group">
    <label for="name">Nome</label>
    <input type="text" id="name" class="form-input" placeholder="Digite seu nome">
</div>
```

### Exemplo de Input de Senha com Toggle

```html
<div class="form-group">
    <label for="password">Senha</label>
    <div class="password-wrapper">
        <input type="password" id="password" class="form-input" placeholder="Digite sua senha">
        <button type="button" class="password-toggle" aria-label="Alternar visibilidade da senha">
            👁️
        </button>
    </div>
</div>
```

### Exemplo de Input de Range

```html
<div class="form-group">
    <label for="volume">Volume</label>
    <input type="range" id="volume" min="0" max="100" value="50">
</div>
```

### Exemplo de Botão Primário

```html
<button class="btn btn-primary">Enviar</button>
```

## 🏗️ Arquitetura dos Componentes

```mermaid
graph TD
    A[CSS Form Styles] --> B[Tipos de Input]
    A --> C[Estados de Validação]
    A --> D[Botões]
    B --> B1[text · email · password]
    B --> B2[select · textarea]
    B --> B3[checkbox · radio]
    B --> B4[file · range]
    B --> B5[password com toggle]
    C --> C1[Estado Padrão]
    C --> C2[Estado de Sucesso]
    C --> C3[Estado de Erro]
    C --> C4[focus-visible]
    D --> D1[btn-primary]
    D --> D2[btn-secondary]
    D --> D3[btn-danger]
    B1 --> E[form-group wrapper]
    B2 --> E
    B3 --> E
    B4 --> E
    E --> F[Saída Estilizada Responsiva]
    C1 --> F
    C2 --> F
    C3 --> F
    D1 --> F
```

## Estrutura do Projeto

```
CSS-Form-Styles/
├── assets/
│   └── hero_image.png
├── docs/
│   ├── README.en.md
│   ├── project_structure.mmd
│   ├── project_structure.png
│   ├── project_structure_en.mmd
│   └── project_structure_en.png
├── public/
│   ├── demo.html
│   └── index.html
├── src/
│   ├── script.js
│   └── styles.css
├── tests/
│   ├── test.html
│   └── test.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Contribuição

Contribuições são bem-vindas! Por favor, consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes sobre como contribuir.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Gabriel Demetrios Lafis**

*   [GitHub](https://github.com/galafis)
*   [LinkedIn](https://www.linkedin.com/in/gabriel-demetrios-lafis/)

---

<a name="en-us"></a>

## 🇬🇧 English

## 🖼️ Hero Image

![CSS Form Styles Hero Image](assets/hero_image.png)

## Description

**CSS Form Styles** is a modern and professional CSS styling library, developed by Gabriel Demetrios Lafis, designed to enhance the appearance and usability of web forms. This project offers a comprehensive set of styled form components, ready to be integrated into any HTML project, ensuring a consistent and visually appealing user experience.

## Features

*   **Professional Styles**: Clean and modern design for all form elements.
*   **Responsiveness**: Optimized to work perfectly on devices of all sizes.
*   **Easy to Use**: Simple integration with any HTML project.
*   **Comprehensive Components**: Styles for text inputs, selects, checkboxes, radio buttons, textareas, file inputs, password inputs with toggle, range inputs, and buttons.
*   **Validation States**: Visual support for success and error states.
*   **Accessibility**: Focus on usability and accessibility, including `focus-visible`.

## Demo

See the styles in action on the [demo page](https://galafis.github.io/CSS-Form-Styles/public/demo.html).

## Installation

To use the styles in your project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/galafis/CSS-Form-Styles.git
    ```

2.  **Copy the files:**
    Copy the `styles.css` file from the `src/` folder and `script.js` to your project's styles/scripts directory.

3.  **Link in your HTML:**
    Add the following lines in the `<head>` and before the closing `</body>` tag of your HTML file:

    ```html
    <link rel="stylesheet" href="path/to/your/styles.css">
    <!-- At the end of the body, before </body> -->
    <script src="path/to/your/script.js"></script>
    ```

## Usage

Styles are automatically applied to form elements with the appropriate CSS classes. Refer to the `public/demo.html` file for examples of how to use each component.

### Text Input Example

```html
<div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="form-input" placeholder="Enter your name">
</div>
```

### Password Input with Toggle Example

```html
<div class="form-group">
    <label for="password">Password</label>
    <div class="password-wrapper">
        <input type="password" id="password" class="form-input" placeholder="Enter your password">
        <button type="button" class="password-toggle" aria-label="Toggle password visibility">
            👁️
        </button>
    </div>
</div>
```

### Range Input Example

```html
<div class="form-group">
    <label for="volume">Volume</label>
    <input type="range" id="volume" min="0" max="100" value="50">
</div>
```

### Primary Button Example

```html
<button class="btn btn-primary">Submit</button>
```

## 🏗️ Component Architecture

```mermaid
graph TD
    A[CSS Form Styles] --> B[Input Types]
    A --> C[Validation States]
    A --> D[Buttons]
    B --> B1[text · email · password]
    B --> B2[select · textarea]
    B --> B3[checkbox · radio]
    B --> B4[file · range]
    B --> B5[password with toggle]
    C --> C1[Default State]
    C --> C2[Success State]
    C --> C3[Error State]
    C --> C4[focus-visible]
    D --> D1[btn-primary]
    D --> D2[btn-secondary]
    D --> D3[btn-danger]
    B1 --> E[form-group wrapper]
    B2 --> E
    B3 --> E
    B4 --> E
    E --> F[Responsive Styled Output]
    C1 --> F
    C2 --> F
    C3 --> F
    D1 --> F
```

## Project Structure

```
CSS-Form-Styles/
├── assets/
│   └── hero_image.png
├── docs/
│   ├── README.en.md
│   ├── project_structure.mmd
│   ├── project_structure.png
│   ├── project_structure_en.mmd
│   └── project_structure_en.png
├── public/
│   ├── demo.html
│   └── index.html
├── src/
│   ├── script.js
│   └── styles.css
├── tests/
│   ├── test.html
│   └── test.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Contribution

Contributions are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Gabriel Demetrios Lafis**

*   [GitHub](https://github.com/galafis)
*   [LinkedIn](https://www.linkedin.com/in/gabriel-demetrios-lafis/)


---

## English

### Overview

CSS Form Styles - A project built with HTML, CSS, developed by Gabriel Demetrios Lafis as part of professional portfolio and continuous learning in Data Science and Software Engineering.

### Key Features

This project demonstrates practical application of modern development concepts including clean code architecture, responsive design patterns, and industry-standard best practices. The implementation showcases real-world problem solving with production-ready code quality.

### How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/galafis/CSS-Form-Styles.git
   ```
2. Follow the setup instructions in the Portuguese section above.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed by [Gabriel Demetrios Lafis](https://github.com/galafis)
