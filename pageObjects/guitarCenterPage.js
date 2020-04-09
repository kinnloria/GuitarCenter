var guitarCommands = {
    depDropDowns: function (departments) {
        for (let i = 1, q = 0; i < 16, q < 15; i++, q++) {
            this
                .useXpath()
                .moveToElement('//span[text()="Departments"]', 5, 5)
                .pause(1500)
                .click(`(//a[@class="departments-menu-dropdown-link arrow"])[${i}]`)
                .expect.element('//h1').text.to.contain(`${departments[q].dep}`)
            this
                .api.url('https://www.guitarcenter.com/')
        }
        return this
    },
    usedDropDowns: function (used) {
        for (let i = 1, q = 0; i < 16, q < 15; i++, q++) {
            this
                .useXpath()
                .moveToElement('//span[text()="Departments"]', 5, 5)
                .pause(1000)
                .click(`(//a[@class="departments-menu-dropdown-link arrow"])[${i}]`)
                .expect.element('//h1').text.to.contain(`${used[q].dep}`)
            this
                .api.url('https://www.guitarcenter.com/')
        }
        return this
    },
    signInGuitar: function () {
        this
            .setValue('@loginEmail')
            .setValue('@loginPassword')

    },
    guitarLink: function (data) {
        this
            .useXpath()
        this
            .click(`(//span[@class="lbl"])[${data.num}]`)
            .pause(2000)
            .expect.element('@mainBody').text.to.contain(`${data.res}`)
        this
            .click('@homeButton')

        return this
    },
    search: function (browser, searchTerm) {
        this
            .click('@searchButton')
            .waitForElementPresent('@searchInput')
            .setValue('@searchInput', [searchTerm, browser.api.Keys.ENTER])
            //.waitForElementPresent('body')
            .assert.containsText('h1[id="search-result-suggest"]', searchTerm)
            .navigate()
        return this
    }
}
module.exports = {
    url: 'https://www.guitarcenter.com/',
    commands: [guitarCommands],
    elements: {
        homeButton: 'a[class="gl logo-anchor"]',
        searchInput: 'input[class="default-value typeAheadEnabled"]',
        LoginButton: 'a[id="nav-myaccount-link"]',
        loginPassword: 'input[name="returningCustomer_Password"]',
        loginEmail: 'input[name="returningCustomer_Email"]',
        mainBody: 'body',
        searchButton: {
            selector: '//input[@id="searchSubmit"]',
            locateStrategy: 'xpath'
        },
        loginArrowDown:
        {
            selector: '//div[@class="downArrow"]',
            locateStrategy: 'xpath'
        }
    }
}