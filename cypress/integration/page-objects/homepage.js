/// <reference types="cypress" />

class Homepage {

    elements = {
        navbar: () => cy.get("#navbar"),
        navbarLogo: () => cy.get("#nav-logo-sprites"),
        navbarLocation: () => cy.get("#nav-global-location-popover-link"),
        navbarSearch: () => cy.get("#nav-search"),
        navbarLanguage: () => cy.get("#icp-nav-flyout"),
        navbarAccount: () => cy.get("#nav-link-accountList"),
        navbarOrders: () => cy.get("#nav-orders"),
        navbarCart: () => cy.get("#nav-cart"),
        navbarHamburger: () => cy.get("#nav-hamburger-menu"),
        navbarOffers: () => cy.get(".nav-a[href='/-/es/gp/goldbox?ref_=nav_cs_gb']"),
        navbarClientService: () => cy.get(".nav-a[href='/-/es/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice']"),
        navbarLists: () => cy.get(".nav-a[href='/-/es/gp/browse.html?node=16115931011&ref_=nav_cs_registry']"),
        navbarGifts: () => cy.get(".nav-a[href='/-/es/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc']"),
        navbarSell: () => cy.get(".nav-a[href='/-/es/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell']")
    }
}

export default Homepage;