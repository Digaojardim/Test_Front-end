
Given(/^que eu acesse o site$/, () => {
	cy.visit('http://automationpractice.com/index.php')
});

When(/^realaizar login com senha valida$/, () => {
    cy.get('.login').click();
    cy.get('#email').focus().type('teste2021@teste.com.br');
    cy.get('#passwd').focus().type('teste');
    cy.get('#SubmitLogin > span').click();  
	
}); 

When(/^realizar uma busca na aba pesquisa$/, () => {
	cy.get('#search_query_top').click();
    cy.get('#search_query_top').focus().type('Blouse');
    cy.get('#searchbox > .btn').click();
});

When(/^incluir produto no carrinho$/, () => {
	cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('.button-container > .button-medium > span').click();   

});

Then(/^Valido os produtos incluidos no carrinho na tela de pagamento$/, () => {
	cy.get('[title="View my shopping cart"]').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('#cgv').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.cheque > span').click();
    cy.get('#cart_navigation > .button > span').click();
    cy.get('.alert').should('have.text','Your order on My Store is complete.')
});

