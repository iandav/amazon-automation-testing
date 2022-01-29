/// <reference types="cypress" />
import Homepage from "../page-objects/homepage";

describe("Testing Amazon homepage functionalities", () => {

    const homepage = new Homepage();

    beforeEach( () => {
        cy.visit("https://www.amazon.com/-/es/");
    })

    // ----- Basic smoke testing ----- //

    it("URL is correct and the page loads", () => {
        
        cy.url().should("eq","https://www.amazon.com/-/es/");

        cy.contains("Inicia sesión para vivir tu mejor experiencia");
    })

    // ----- Navbar ----- //

    it("Navbar is visible", () => {
        homepage.elements.navbar().should("be.visible");
    })

    it("Navbar elements are present", () => {
        homepage.elements.navbarLogo().should("exist");
        homepage.elements.navbarLocation().should("exist");
        homepage.elements.navbarSearch().should("exist");
        homepage.elements.navbarLanguage().should("exist");
        homepage.elements.navbarAccount().should("exist");
        homepage.elements.navbarOrders().should("exist");
        homepage.elements.navbarCart().should("exist");
        homepage.elements.navbarHamburger().should("exist");
        homepage.elements.navbarOffers().should("exist");
        homepage.elements.navbarClientService().should("exist");
        homepage.elements.navbarLists().should("exist");
        homepage.elements.navbarGifts().should("exist");
        homepage.elements.navbarSell().should("exist");
    })

    it("Navbar bottom elements have expected text", () => {
        homepage.elements.navbarHamburger().contains("Todo");
        homepage.elements.navbarOffers().contains("Ofertas del Día");
        homepage.elements.navbarClientService().contains("Servicio al Cliente");
        homepage.elements.navbarLists().contains("Listas");
        homepage.elements.navbarGifts().contains("Tarjetas de Regalo");
        homepage.elements.navbarSell().contains("Vender");
    })

    it.only("All navbar links are functioning", () => {
        homepage.elements.navbarLogo().click();
        cy.url().should("eq","https://www.amazon.com/-/es/ref=nav_logo");
        cy.go("back");

        homepage.elements.navbarLocation().click({force: true});
        cy.get(".a-popover-wrapper").should("be.visible").and("contain","Elige tu ubicación");
        cy.reload();

        //homepage.elements.navbarLanguage().click({force: true});
        //cy.contains("Idioma de preferencia");
        //cy.go("back");

        homepage.elements.navbarAccount().click();
        cy.contains("Iniciar sesión");
        cy.go("back");

        homepage.elements.navbarOrders().click();
        cy.contains("Iniciar sesión");
        cy.go("back");

        homepage.elements.navbarCart().click();
        cy.contains("Tu Carrito de Amazon está vacío");
        cy.go("back");

        //homepage.elements.navbarHamburger().click();
        //cy.contains("Hola, Identifícate");
        //cy.go("back");

        homepage.elements.navbarOffers().click();
        cy.url().should("eq","https://www.amazon.com/-/es/gp/goldbox?ref_=nav_cs_gb");
        cy.go("back");

        homepage.elements.navbarClientService().click();
        cy.contains("Hola. ¿En qué podemos ayudarte?");
        cy.go("back");

        homepage.elements.navbarLists().click();
        cy.contains("Buscar una lista de regalos");
        cy.go("back");

        homepage.elements.navbarGifts().click();
        cy.contains("La tarjeta de regalo perfecta para toda ocasión");
        cy.go("back");

        homepage.elements.navbarSell().click();
        cy.contains("Vender en Amazon");
        cy.go("back");
    })

    // ----- Slider ----- //



})