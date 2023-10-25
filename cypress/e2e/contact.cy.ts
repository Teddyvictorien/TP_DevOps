describe('Form chack', () => {
    it('can submit a contact request', () => {
      cy.visit('http://localhost:3000/contact');
  
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="email"]').type('john.doe@myges.fr');
      cy.get('textarea[name="message"]').type('Ici le message');

      cy.get('button[type="submit"]').click();
  
      cy.contains('Votre message a bien été envoyé');
    })

    it('cant submit a contact request with bad email', () => {
        cy.visit('http://localhost:3000/contact');
    
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="email"]').type('john.doe@myges');
        cy.get('textarea[name="message"]').type('Ici le message');
  
        cy.get('button[type="submit"]').click();
    
        cy.contains('Invalid email');
    })

    it('cant submit a contact request with lastName empty field', () => {
        cy.visit('http://localhost:3000/contact');
        
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="email"]').type('john.doe@myges.fr');
        cy.get('textarea[name="message"]').type('Ici le message');
  
        cy.get('button[type="submit"]').click();
    
        cy.contains('String must contain at least 2 character(s)');
    })

    it('cant submit a contact request with firstName empty field', () => {
        cy.visit('http://localhost:3000/contact');
    
        
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@myges.fr');
        cy.get('textarea[name="message"]').type('Ici le message');
  
        cy.get('button[type="submit"]').click();
    
        cy.contains('String must contain at least 2 character(s)');
    })

    it('cant submit a contact request with message empty field', () => {
        cy.visit('http://localhost:3000/contact');
    
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@myges.fr');
  
        cy.get('button[type="submit"]').click();
    
        cy.contains('String must contain at least 2 character(s)');
    })

    it('cant submit a contact request with all empty', () => {
        cy.visit('http://localhost:3000/contact');
    
        cy.get('button[type="submit"]').click();

        cy.get('p:contains("String must contain at least 2 character(s)")')
            .should('have.length', 3);

        cy.get('p:contains("Invalid email")')
            .should('have.length', 1)
    })
  })