$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homologacao.nucleo/01_acesso/FT_045-DadosAcesso.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "FT_045 Validar operações da pagelet \u0027Dados de Acesso\u0027",
  "description": "  Como usuário ZG\n  Eu quero me certificar do correto funcionamento da pagelet \u0027Dados de Acesso\u0027",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@FT_045"
    },
    {
      "line": 3,
      "name": "@acesso"
    }
  ]
});
formatter.before({
  "duration": 1278905671,
  "status": "passed"
});
formatter.before({
  "duration": 5658928120,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso uma pagelet através do menu \"Cadastro de Dados \u003e\u003e Dados de Acesso\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro de Dados \u003e\u003e Dados de Acesso",
      "offset": 36
    }
  ],
  "location": "PadraoSteps.groovy:10"
});
formatter.result({
  "duration": 1594806638,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "CN01 Validar carregamento dos dados na grid \u0027Dados de Acesso\u0027",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn01-validar-carregamento-dos-dados-na-grid-\u0027dados-de-acesso\u0027",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 11,
      "name": "@automatizado-learn"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "certificar que a listagem de cadastro de dados de acesso foi carregada na tela",
  "keyword": "Então "
});
formatter.match({
  "location": "DadosAcessoSteps.groovy:11"
});
formatter.result({
  "duration": 1306420862,
  "status": "passed"
});
formatter.after({
  "duration": 110654695,
  "status": "passed"
});
formatter.after({
  "duration": 4145427,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "CN02 Incluir dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn02-incluir-dados-de-acesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 15,
      "name": "@automatizado-learn"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "clicar no botão \"Novo\" em \u0027Operações\u0027 de Dados de Acesso",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informar \"\u003chospital\u003e\", \"\u003corigem\u003e\", \"\u003csite\u003e\", \"\u003cconvenio\u003e\", \"\u003cusuario\u003e\", \"\u003cdescricao\u003e\" e \"\u003csenha\u003e\" em \u0027Dados de Acesso\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "na tela de cadastro de \u0027Dados Acesso\u0027 acionar a opção \"Salvar\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "certificar que os dados foram gravados corretamente na grid de \u0027Dados Acesso\u0027",
  "keyword": "Então "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn02-incluir-dados-de-acesso;",
  "rows": [
    {
      "cells": [
        "hospital",
        "origem",
        "site",
        "convenio",
        "usuario",
        "descricao",
        "senha"
      ],
      "line": 23,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn02-incluir-dados-de-acesso;;1"
    },
    {
      "cells": [
        "11.006.293/0001-30 - Hospital São Domingos Ltda",
        "CONVENIO",
        "Amil",
        "Amil",
        "teste",
        "teste",
        "teste123"
      ],
      "line": 24,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn02-incluir-dados-de-acesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5227979,
  "status": "passed"
});
formatter.before({
  "duration": 5782265,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso uma pagelet através do menu \"Cadastro de Dados \u003e\u003e Dados de Acesso\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro de Dados \u003e\u003e Dados de Acesso",
      "offset": 36
    }
  ],
  "location": "PadraoSteps.groovy:10"
});
formatter.result({
  "duration": 777952018,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CN02 Incluir dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn02-incluir-dados-de-acesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 15,
      "name": "@automatizado-learn"
    },
    {
      "line": 3,
      "name": "@acesso"
    },
    {
      "line": 3,
      "name": "@FT_045"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "clicar no botão \"Novo\" em \u0027Operações\u0027 de Dados de Acesso",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informar \"11.006.293/0001-30 - Hospital São Domingos Ltda\", \"CONVENIO\", \"Amil\", \"Amil\", \"teste\", \"teste\" e \"teste123\" em \u0027Dados de Acesso\u0027",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "na tela de cadastro de \u0027Dados Acesso\u0027 acionar a opção \"Salvar\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "certificar que os dados foram gravados corretamente na grid de \u0027Dados Acesso\u0027",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Novo",
      "offset": 17
    }
  ],
  "location": "DadosAcessoSteps.groovy:16"
});
formatter.result({
  "duration": 608231810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11.006.293/0001-30 - Hospital São Domingos Ltda",
      "offset": 10
    },
    {
      "val": "CONVENIO",
      "offset": 61
    },
    {
      "val": "Amil",
      "offset": 73
    },
    {
      "val": "Amil",
      "offset": 81
    },
    {
      "val": "teste",
      "offset": 89
    },
    {
      "val": "teste",
      "offset": 98
    },
    {
      "val": "teste123",
      "offset": 108
    }
  ],
  "location": "DadosAcessoSteps.groovy:22"
});
formatter.result({
  "duration": 5549072802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salvar",
      "offset": 55
    }
  ],
  "location": "DadosAcessoSteps.groovy:32"
});
formatter.result({
  "duration": 692905553,
  "status": "passed"
});
formatter.match({
  "location": "DadosAcessoSteps.groovy:37"
});
formatter.result({
  "duration": 5136325491,
  "status": "passed"
});
formatter.after({
  "duration": 92922251,
  "status": "passed"
});
formatter.after({
  "duration": 224964,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "CN03 Editar dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn03-editar-dados-de-acesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 26,
      "name": "@automatizado-learn"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "detalhar um usuario \"\u003cusuarioDetalhe\u003e\" na listagem",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "informar \"\u003chospital\u003e\", \"\u003corigem\u003e\", \"\u003csite\u003e\", \"\u003cconvenio\u003e\", \"\u003cusuario\u003e\", \"\u003cdescricao\u003e\" e \"\u003csenha\u003e\" em \u0027Dados de Acesso\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "na tela de cadastro de \u0027Dados Acesso\u0027 acionar a opção \"Salvar\"",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "certificar que os dados foram alterados corretamente na grid de \u0027Dados Acesso\u0027",
  "keyword": "Então "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn03-editar-dados-de-acesso;",
  "rows": [
    {
      "cells": [
        "usuarioDetalhe",
        "hospital",
        "origem",
        "site",
        "convenio",
        "usuario",
        "descricao",
        "senha"
      ],
      "line": 34,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn03-editar-dados-de-acesso;;1"
    },
    {
      "cells": [
        "teste",
        "31.866.264/0001-56 - Hospital de Teste",
        "CONVENIO",
        "Assefaz",
        "Assefaz",
        "teste edicao",
        "teste edicao",
        "edicao123"
      ],
      "line": 35,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn03-editar-dados-de-acesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4195339,
  "status": "passed"
});
formatter.before({
  "duration": 6456357,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso uma pagelet através do menu \"Cadastro de Dados \u003e\u003e Dados de Acesso\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro de Dados \u003e\u003e Dados de Acesso",
      "offset": 36
    }
  ],
  "location": "PadraoSteps.groovy:10"
});
formatter.result({
  "duration": 5689882856,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "CN03 Editar dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn03-editar-dados-de-acesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 26,
      "name": "@automatizado-learn"
    },
    {
      "line": 3,
      "name": "@acesso"
    },
    {
      "line": 3,
      "name": "@FT_045"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "detalhar um usuario \"teste\" na listagem",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "informar \"31.866.264/0001-56 - Hospital de Teste\", \"CONVENIO\", \"Assefaz\", \"Assefaz\", \"teste edicao\", \"teste edicao\" e \"edicao123\" em \u0027Dados de Acesso\u0027",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "na tela de cadastro de \u0027Dados Acesso\u0027 acionar a opção \"Salvar\"",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "certificar que os dados foram alterados corretamente na grid de \u0027Dados Acesso\u0027",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 21
    }
  ],
  "location": "DadosAcessoSteps.groovy:43"
});
formatter.result({
  "duration": 7249913593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31.866.264/0001-56 - Hospital de Teste",
      "offset": 10
    },
    {
      "val": "CONVENIO",
      "offset": 52
    },
    {
      "val": "Assefaz",
      "offset": 64
    },
    {
      "val": "Assefaz",
      "offset": 75
    },
    {
      "val": "teste edicao",
      "offset": 86
    },
    {
      "val": "teste edicao",
      "offset": 102
    },
    {
      "val": "edicao123",
      "offset": 119
    }
  ],
  "location": "DadosAcessoSteps.groovy:22"
});
formatter.result({
  "duration": 5423846098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salvar",
      "offset": 55
    }
  ],
  "location": "DadosAcessoSteps.groovy:32"
});
formatter.result({
  "duration": 645628319,
  "status": "passed"
});
formatter.match({
  "location": "DadosAcessoSteps.groovy:50"
});
formatter.result({
  "duration": 5420624547,
  "status": "passed"
});
formatter.after({
  "duration": 96401239,
  "status": "passed"
});
formatter.after({
  "duration": 183798,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "CN04 Remover dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn04-remover-dados-de-acesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 37,
      "name": "@automatizado-learn"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "selecionar um usuario \"\u003cusuario\u003e\" da listagem",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "clicar no botão \"Remover\" e confirmar no botão \"Sim\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "certificar a remoção com a mensagem \"DadosAcesso removido!\" confirmar no botão \"OK\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn04-remover-dados-de-acesso;",
  "rows": [
    {
      "cells": [
        "usuario"
      ],
      "line": 44,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn04-remover-dados-de-acesso;;1"
    },
    {
      "cells": [
        "teste edicao"
      ],
      "line": 45,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn04-remover-dados-de-acesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3499225,
  "status": "passed"
});
formatter.before({
  "duration": 6151380,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso uma pagelet através do menu \"Cadastro de Dados \u003e\u003e Dados de Acesso\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro de Dados \u003e\u003e Dados de Acesso",
      "offset": 36
    }
  ],
  "location": "PadraoSteps.groovy:10"
});
formatter.result({
  "duration": 892774757,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "CN04 Remover dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn04-remover-dados-de-acesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 37,
      "name": "@automatizado-learn"
    },
    {
      "line": 3,
      "name": "@acesso"
    },
    {
      "line": 3,
      "name": "@FT_045"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "selecionar um usuario \"teste edicao\" da listagem",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "clicar no botão \"Remover\" e confirmar no botão \"Sim\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "certificar a remoção com a mensagem \"DadosAcesso removido!\" confirmar no botão \"OK\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "teste edicao",
      "offset": 23
    }
  ],
  "location": "DadosAcessoSteps.groovy:66"
});
formatter.result({
  "duration": 5145577396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Remover",
      "offset": 17
    },
    {
      "val": "Sim",
      "offset": 48
    }
  ],
  "location": "DadosAcessoSteps.groovy:71"
});
formatter.result({
  "duration": 2126673737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DadosAcesso removido!",
      "offset": 37
    },
    {
      "val": "OK",
      "offset": 80
    }
  ],
  "location": "DadosAcessoSteps.groovy:77"
});
formatter.result({
  "duration": 245167848,
  "status": "passed"
});
formatter.after({
  "duration": 89775026,
  "status": "passed"
});
formatter.after({
  "duration": 195675,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 47,
      "value": "#    Realizar a validação dos dados de acesso, com observação para não afetar o cliente."
    },
    {
      "line": 48,
      "value": "#    Ajustar para que não execute mais de 3 vezes no mesmo dia para não correr o risco de invalidar dados de acesso do cliente"
    }
  ],
  "line": 50,
  "name": "CN05 Validar dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn05-validar-dados-de-acesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 49,
      "name": "@automatizado-learn"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "selecionar um usuario da coluna site \"\u003csite\u003e\" da listagem de dados de acesso",
  "keyword": "Quando "
});
formatter.step({
  "line": 52,
  "name": "clicar no botão \"Validar\" no painel esquerdo \u0027Operações\u0027 e confirmar no botão \"OK\" da mensagem de validação",
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "devo verificar ao atualizar a tela que o usuario da coluna site \"\u003csite\u003e\" está na cor \u0027Verde\u0027",
  "keyword": "Então "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn05-validar-dados-de-acesso;",
  "rows": [
    {
      "cells": [
        "site"
      ],
      "line": 56,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn05-validar-dados-de-acesso;;1"
    },
    {
      "cells": [
        "Cassi"
      ],
      "line": 57,
      "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn05-validar-dados-de-acesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2852468,
  "status": "passed"
});
formatter.before({
  "duration": 4127444,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso uma pagelet através do menu \"Cadastro de Dados \u003e\u003e Dados de Acesso\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastro de Dados \u003e\u003e Dados de Acesso",
      "offset": 36
    }
  ],
  "location": "PadraoSteps.groovy:10"
});
formatter.result({
  "duration": 767025449,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "CN05 Validar dados de acesso",
  "description": "",
  "id": "ft-045-validar-operações-da-pagelet-\u0027dados-de-acesso\u0027;cn05-validar-dados-de-acesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 49,
      "name": "@automatizado-learn"
    },
    {
      "line": 3,
      "name": "@acesso"
    },
    {
      "line": 3,
      "name": "@FT_045"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "selecionar um usuario da coluna site \"Cassi\" da listagem de dados de acesso",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 52,
  "name": "clicar no botão \"Validar\" no painel esquerdo \u0027Operações\u0027 e confirmar no botão \"OK\" da mensagem de validação",
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "devo verificar ao atualizar a tela que o usuario da coluna site \"Cassi\" está na cor \u0027Verde\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Cassi",
      "offset": 38
    }
  ],
  "location": "DadosAcessoSteps.groovy:81"
});
formatter.result({
  "duration": 6279691439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Validar",
      "offset": 17
    },
    {
      "val": "OK",
      "offset": 79
    }
  ],
  "location": "DadosAcessoSteps.groovy:86"
});
formatter.result({
  "duration": 932825945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cassi",
      "offset": 65
    }
  ],
  "location": "DadosAcessoSteps.groovy:91"
});
formatter.result({
  "duration": 8196883542,
  "status": "passed"
});
formatter.after({
  "duration": 89402083,
  "status": "passed"
});
formatter.after({
  "duration": 129202,
  "status": "passed"
});
});