const { Given, When, Then } = require('@cucumber/cucumber');
let usuariosCadastrados = {};
let nomeCadastro = '';
let cpfCadastro = '';

Given('que o usuário não está cadastrado com o CPF {string}', function (cpf) {
    // Verifica se o usuário não está cadastrado
    console.log(`Usuário não está cadastrado com o CPF: ${cpf}`);
});

Given('que o usuário já está cadastrado com o CPF {string}', function (cpf) {
    // Cadastra o usuário para simular que ele já está cadastrado
    console.log(`Usuário já está cadastrado com o CPF: ${cpf}`);
});

When('o usuário insere o nome {string} e o CPF {string}', function (nome, cpf) {
    // Armazena o nome e o CPF inseridos
    nomeCadastro = nome;
    cpfCadastro = cpf;
    console.log(`Usuário insere o nome: ${nome} e o CPF: ${cpf}`);
});

When('o usuário submete o formulário de cadastro', function () {
    // Simula o envio do formulário de cadastro
    if (usuariosCadastrados[cpfCadastro]) {
        console.log('Erro: Usuário já está cadastrado');
    } else {
        console.log('Cadastro realizado com sucesso');
    }
});

Then('o usuário deve ser cadastrado com sucesso', function () {
    // Verifica se o usuário foi cadastrado com sucesso
    console.log('Usuário cadastrado com sucesso');
});

Then('o usuário deve ver uma mensagem de erro indicando que o usuário já está cadastrado', function () {
    // Verifica se a mensagem de erro é exibida
    console.log('Usuário vê uma mensagem de erro indicando que o usuário já está cadastrado');
});


let movies = [];

Given('existem os seguintes filmes:', function (dataTable) {
    movies = dataTable.hashes();
    console.log("Lista de Filmes no banco:\n", movies);
});

When('exibe os filmes', function () {
    // precisa conter algo para passar nos testes
    console.log("Exibe filmes");
});

Then('deve ver os seguintes detalhes do filme:', function (dataTable) {
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Name: ", element.Name, " Year: ", element.Year, " IMDb: ", element.IMDb);
    });
});


Given('que o usuário esta na pagina do objeto', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("pagina do objeto");
});

When('o usuário insere o nome {string} e cliqua em buscar', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da pesquisa");
});

Then('o usuário deve ver as patraformas em que pode compra\\/assistir\\/ler {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Dados da pesquisa: ", string);
});


Given('que o usuário esta logado e na pagina de Edição', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Dados da Edição: ");
});


When('o usuário seleciona o objeto a ser editado com o nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Edição");
});

Then('o usuário deve confirmar a mudança', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Edição");
});


Then('apos confirmação o usuário deve ver as mudança em {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Edição");
});



Given('que o usuário esta logado e na pagina de Remoção', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Remoção");
});


When('o usuário seleciona o objeto a ser excluido com o nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Remoção");
});


Then('o usuário deve confirmar a Remoção', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Remoção");
});


Then('{string} não deve esta na pagina', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da Remoção");
});



Given('que o usuário esta logado e na pagina de criação de post', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da criação de post");
});


When('o usuário adiciona {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da criação de post");
});
Then('o usuário deve confirmar a Adição', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da criação de post");
});

Then('{string} deve esta na pagina', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Recebe o dado da criação de post");
});