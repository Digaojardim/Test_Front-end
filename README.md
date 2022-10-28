# Test_Front-end

## Teste de Automação Keegoo :computer:

Este é o teste de WEB que esta automatizado

##  Requisitos :book:

 * BDD:Cumcumber
 * Cypress
 
 
 


 ## Como executar a aplicação :arrow_forward:
 A aplicação estará disponível através da URL [http://localhost:8888]

 ## Execução do Teste
 Para executar o teste completo, **Suite.classe**

* @RunWith(org.junit.runners.Suite.class)
* @SuiteClasses({
	* RestricaoTest.class,
	* CadastroTest.class,
	* AtualizaumaSimulaçãoTest.class,
	* NovaSimulacaoTest.class,
	* SimulacaoTest.class,
	* DeletarSimulacaoTest.class,

## Obs: :exclamation:
Algumas requisições deram erros nos estatusCode
* **DeletarSimulacaoTest** era pra retornar 204, retorno 200
