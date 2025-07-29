# CSS Form Styles

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Coleção de estilos modernos para formulários web, incluindo campos de entrada, botões, validação visual e estados interativos implementados com CSS3 puro.

## 🎯 Demonstração

Este projeto oferece estilos profissionais para formulários web com foco em usabilidade, acessibilidade e design moderno.

## ✨ Características

- **Estilos Modernos**: Design limpo e profissional
- **Estados Interativos**: Hover, focus, active e disabled
- **Validação Visual**: Indicadores de erro e sucesso
- **Acessibilidade**: Suporte a screen readers e navegação por teclado
- **Responsivo**: Adaptável a diferentes dispositivos

## 🛠️ Tecnologias

- **HTML5**: Formulários semânticos
- **CSS3**: Pseudo-classes, transições e transformações
- **CSS Variables**: Sistema de cores e espaçamentos

## 📁 Estrutura do Projeto

```
CSS-Form-Styles/
├── index.html          # Demonstração de formulários
├── styles.css          # Estilos para formulários
├── README.md           # Documentação
├── LICENSE             # Licença MIT
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🚀 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/galafis/CSS-Form-Styles.git
cd CSS-Form-Styles
```

2. Abra o arquivo `index.html` no navegador:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .
```

### Exemplos de Estilos

#### Input Fields Modernos
```css
.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

#### Botões Estilizados
```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
}
```

#### Estados de Validação
```css
.form-input.valid {
    border-color: #28a745;
}

.form-input.invalid {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 14px;
    margin-top: 4px;
}
```

## 🎨 Componentes Incluídos

- **Text Inputs**: Campos de texto com estados visuais
- **Select Dropdowns**: Seletores customizados
- **Checkboxes & Radio**: Controles personalizados
- **Buttons**: Variações de botões (primary, secondary, outline)
- **Form Groups**: Agrupamento de campos com labels
- **Validation States**: Indicadores visuais de erro/sucesso

## 🔧 Personalização

Modifique as variáveis CSS para personalizar o design:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #28a745;
    --error-color: #dc3545;
    --border-radius: 8px;
    --input-padding: 12px 16px;
}
```

## 📱 Responsividade

Os formulários são otimizados para diferentes dispositivos:

```css
/* Mobile */
@media (max-width: 768px) {
    .form-group {
        margin-bottom: 16px;
    }
    
    .btn {
        width: 100%;
    }
}
```

## 🔧 Extensões Possíveis

- [ ] Mais variações de inputs (file, range, color)
- [ ] Formulários multi-step
- [ ] Integração com validação JavaScript
- [ ] Temas dark/light
- [ ] Animações de transição entre estados
- [ ] Componentes de upload de arquivos

## 🤝 Contribuindo

Contribuições são bem-vindas! Para adicionar novos estilos:

1. Fork o projeto
2. Crie uma branch para seu estilo (`git checkout -b feature/NovoEstilo`)
3. Commit suas mudanças (`git commit -m 'Adiciona novo estilo de formulário'`)
4. Push para a branch (`git push origin feature/NovoEstilo`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Gabriel Demetrios Lafis**

- GitHub: [@galafis](https://github.com/galafis)
- Email: gabrieldemetrios@gmail.com

---

⭐ Se este projeto foi útil, considere deixar uma estrela!

