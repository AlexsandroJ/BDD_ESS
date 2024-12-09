Feature: Cadastro de Usuário

  Scenario: Cadastro de usuário novo
    Given que o usuário não está cadastrado com o CPF "123.456.789-09"
    When o usuário insere o nome "João Silva" e o CPF "123.456.789-09"
    And o usuário submete o formulário de cadastro
    Then o usuário deve ser cadastrado com sucesso

  Scenario: Tentativa de cadastro de usuário já cadastrado
    Given que o usuário já está cadastrado com o CPF "123.456.789-09"
    When o usuário insere o nome "João Silva" e o CPF "123.456.789-09"
    And o usuário submete o formulário de cadastro
    Then o usuário deve ver uma mensagem de erro indicando que o usuário já está cadastrado

