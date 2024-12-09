# Passos para Configurar o Projeto

## 1 Instalar Git
Git é uma ferramenta de controle de versão que permite gerenciar e acompanhar mudanças no seu código-fonte ao longo do tempo.

Windows:
Acesse o site oficial do Git: git-scm.com

Baixe o instalador para Windows.

Execute o instalador e siga as instruções na tela, mantendo as configurações padrão recomendadas.

macOS:
Você pode instalar o Git usando o Homebrew.

Terminal
```
brew install git
```
Linux:
No Ubuntu ou distribuições baseadas em Debian:

Terminal
```
sudo apt-get update
sudo apt-get install git
```

## 2. Instalar Node.jse npm
Node.js é um ambiente de execução de JavaScript, e npm (Node Package Manager) é o gerenciador de pacotes padrão para Node.js, usado para instalar bibliotecas e ferramentas de desenvolvimento.

Windows e macOS:
Acesse o site oficial do Node.js: nodejs.org

Baixe o instalador para o seu sistema operacional (recomendo a versão LTS).

Execute o instalador e siga as instruções na tela, mantendo as configurações padrão recomendadas.

Linux:
No Ubuntu ou distribuições baseadas em Debian:

Terminal
```
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```
No Fedora:

Terminal
sudo dnf install nodejs
sudo dnf install npm
No Arch Linux:

Terminal
```
sudo pacman -S nodejs npm
```
## 3. Clonar o Repositório do Projeto
Usando o Git, você pode clonar o repositório do seu projeto para obter uma cópia local.

Terminal
```
git clone https://github.com/AlexsandroJ/BDD_ESS.git
```
## 4. Navegar até o Diretório do Projeto
Depois de clonar o repositório, navegue até o diretório do projeto.

Terminal
```
cd BDD_ESS
```
## 5. Instalar as Dependências do Projeto
Use o npm para instalar todas as dependências listadas no arquivo package.json do projeto.

Terminal
```
npm install
```
## 6. Iniciar os testes do Projeto
Uma vez que as dependências estejam instaladas, você pode iniciar os testes do projeto.

Terminal
```
npm test
```

 
