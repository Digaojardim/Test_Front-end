## diogenesjardim
Feature:  Web Site

Como usuario, desejo ultilizar o Site
Para realizar compras e consultas

Scenario: Realizar compras no site
  Given que eu acesse o site
  And realaizar login com senha valida
  And realizar uma busca na aba pesquisa
  When incluir produto no carrinho
  Then Valido os produtos incluidos no carrinho na tela de pagamento



   

    
