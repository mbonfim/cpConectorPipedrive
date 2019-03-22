# Objetivo

Testar API (módulo Node) do pipedrive, para projeto de integração de pedidos com o Protheus.

# Produto

Criado um usuário (mbonfim@gmail.com / 21marbon) no Pipedrive (válido por 14 dias) e gerado uma apikey (```9e4f9130c24576fa3eba2e72a1c4702ea0a8593a```).

Com base no exemplo do módulo node pipedrive ```https://github.com/pipedrive/client-nodejs```, gerado um exemplo (```index.js```) que le objetos e mostra no console.

A idéia é criar um serviço (umbler), que integre que leia o pipedrive e gere um pedido no Protheus. A criação dependeria de um webservice a ser criado no Protheus que será chamado pela API node.

# Roadmap

## Backlog

* Definir o que indica, no pipedrive, que um pedido pode ser gerado.

* Definir de/para de informações do pipedrive x Protheus para geração do pedido.

* Definir gatilho de integração (se periódigo, se por requisição, etc).

* Criar webservice no Protheus