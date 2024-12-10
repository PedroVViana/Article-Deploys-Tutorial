import React from 'react';
import './DeployGuide.css';

const DeployGuide = () => {
  return (
    <div className="deploy-guide-container">
      <header className="deploy-guide-header">
        <h1>Como Fazer o Deploy de um Projeto no GitHub Pages com Vite</h1>
        <p>GitHub Pages é uma solução simples e eficiente para hospedar projetos estáticos. Este artigo apresenta um guia prático para publicar e atualizar um projeto criado com Vite no GitHub Pages.</p>
      </header>

      <section className="deploy-step">
        <h2>Passo 1: Subir o Projeto no Repositório do GitHub</h2>
        <p>Crie um repositório no GitHub e envie os arquivos do seu projeto para a branch principal com os seguintes comandos:</p>
        <pre className="code-snippet">
          {`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SeuUsuario/nome-do-repositorio.git
git push -u origin main`}
        </pre>
      </section>

      <section className="deploy-step">
        <h2>Passo 2: Instalar o Pacote <code>gh-pages</code></h2>
        <p>No terminal, instale o pacote gh-pages como dependência de desenvolvimento:</p>
        <pre className="code-snippet">npm install gh-pages --save-dev</pre>
      </section>

      <section className="deploy-step">
        <h2>Passo 3: Configurar o <code>package.json</code></h2>
        <p>Abra o arquivo <code>package.json</code> e adicione as seguintes configurações:</p>
        <pre className="code-snippet">
          {`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://SeuUsuario.github.io/nome-do-repositorio",`}
        </pre>
      </section>

      <section className="deploy-step">
        <h2>Passo 4: Configurar o <code>vite.config.js</code></h2>
        <pre className="code-snippet">
          {`import { defineConfig } from 'vite';

export default defineConfig({
  base: '/nome-do-repositorio/',
});`}
        </pre>
      </section>

      <section className="deploy-step">
        <h2>Passo 5: Fazer o Deploy</h2>
        <p>No terminal, execute o comando para fazer o deploy:</p>
        <pre className="code-snippet">npm run deploy</pre>
        <p>Este comando irá:</p>
        <ul>
          <li>Criar uma build otimizada do projeto.</li>
          <li>Enviar os arquivos da pasta dist para a branch gh-pages, que será usada pelo GitHub Pages para exibir o site.</li>
        </ul>
      </section>

      <section className="deploy-step">
        <h2>Passo 6: Alterar ou Atualizar o Projeto</h2>
        <p>Suba as alterações e publique novamente com os seguintes comandos:</p>
        <pre className="code-snippet">git add . <br/>git commit -m "Update project" <br/>git push</pre>
        <p>Reconstrua e publique novamente:</p>
        <pre className="code-snippet">npm run build <br/>npm run deploy</pre>
      </section>

      <footer className="deploy-guide-footer">
        <p>🎉 Seu site está online e disponível para todos acessarem!</p>
      </footer>
    </div>
  );
};

export default DeployGuide;
