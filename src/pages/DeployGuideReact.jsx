import React from "react";
import "./DeployGuideReact.css";

const DeployGuideReact = () => {
  return (
    <div className="deploy-container">
      <div className="deploy-card">
        <h1 className="deploy-title">Como Fazer Deploy de um Aplicativo React no GitHub Pages (Sem Vite)</h1>
        <p className="deploy-intro">
          Fazer o deploy de um aplicativo React no GitHub Pages é uma maneira eficiente de publicar sua aplicação na web gratuitamente. Aqui está um guia completo para realizar o deploy de um projeto criado com o Create React App, sem o uso de ferramentas como Vite.
        </p>
        <div className="deploy-content">
          <section className="deploy-section">
            <h2 className="deploy-section-title">1. Criando e Configurando o Repositório no GitHub</h2>
            <p className="deploy-text">
              Acesse o GitHub e crie um novo repositório para o seu projeto.
            </p>
            <pre className="deploy-code-block">
              git clone https://github.com/seu-usuario/nome-do-repositorio.git
            </pre>
            <p className="deploy-text">
              Se você já tem o projeto criado localmente, conecte-o ao repositório:
            </p>
            <pre className="deploy-code-block">
              git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
            </pre>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">2. Instalando o gh-pages</h2>
            <p className="deploy-text">
              Para realizar o deploy, é necessário instalar a dependência gh-pages. No terminal, dentro do diretório do seu projeto, execute o seguinte comando:
            </p>
            <pre className="deploy-code-block">
              npm install gh-pages --save-dev
            </pre>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">3. Configurando o Arquivo package.json</h2>
            <p className="deploy-text">
              Agora você precisa atualizar o arquivo <code>package.json</code> com as informações do deploy.
            </p>
            <p className="deploy-text">Adicione a propriedade homepage:</p>
            <pre className="deploy-code-block">
              "homepage": "https://seu-usuario.github.io/nome-do-repositorio",
            </pre>
            <p className="deploy-text">E adicione os scripts abaixo na seção <code>scripts</code>:</p>
            <pre className="deploy-code-block">
              "scripts": &#123;
              <br />
              &nbsp;&nbsp;"predeploy": "npm run build",
              <br />
              &nbsp;&nbsp;"deploy": "gh-pages -d build"
              <br />
              &#125;
            </pre>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">4. Fazendo o Primeiro Deploy</h2>
            <p className="deploy-text">
              Com a configuração pronta, siga os passos abaixo para fazer o deploy inicial:
            </p>
            <pre className="deploy-code-block">
              npm run deploy
            </pre>
            <p className="deploy-text">
              Este comando vai compilar o aplicativo para produção e enviar os arquivos para o branch <code>gh-pages</code> no seu repositório.
            </p>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">5. Configurando o GitHub Pages no Repositório</h2>
            <p className="deploy-text">
              Após o deploy, é necessário ativar o GitHub Pages:
            </p>
            <ul className="deploy-list">
              <li>Acesse o repositório no GitHub.</li>
              <li>Vá para <strong>Settings</strong> e depois <strong>Pages</strong>.</li>
              <li>Em Source, selecione o branch <code>gh-pages</code> e clique em Save.</li>
            </ul>
            <p className="deploy-text">
              O link para o seu site será gerado e exibido na mesma página.
            </p>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">6. Atualizando o Aplicativo</h2>
            <p className="deploy-text">
              Sempre que fizer alterações no seu aplicativo, siga este processo para publicá-las:
            </p>
            <pre className="deploy-code-block">
              git add .
              <br />
              git commit -m "sua mensagem de commit"
              <br />
              git push origin main
            </pre>
            <p className="deploy-text">
              Depois, execute o comando de deploy novamente:
            </p>
            <pre className="deploy-code-block">
              npm run deploy
            </pre>
          </section>

          <section className="deploy-section">
            <h2 className="deploy-section-title">Dicas e Boas Práticas</h2>
            <ul className="deploy-list">
              <li>Verifique o Caminho Base: Certifique-se de que o valor do homepage em <code>package.json</code> está configurado corretamente.</li>
              <li>Atualizações Rápidas: Não se esqueça de sempre rodar <code>npm run deploy</code> após alterações importantes.</li>
              <li>Debug: Caso o site não carregue corretamente, confira se o caminho base está configurado corretamente.</li>
            </ul>
          </section>
        </div>
          <footer className="deploy-guide-footer">
            <p>🎉 Seu site está online e disponível para todos acessarem!</p>
        </footer>
      </div>
    </div>
  );
};

export default DeployGuideReact;
