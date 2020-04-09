var guitar = {}
var departments = require('../TestAssets/departmentsArray')
var used = require('../TestAssets/usedArray')
var allLinks = require('../TestAssets/allLinks')
var signInArray = require('../TestAssets/signInArray')
var vintageArrays = require('../TestAssets/vintageArrays')
module.exports = {
    before: browser => {
        guitar = browser.page.guitarCenterPage()
        guitar.navigate()
    },
    'Search Test': browser => {
        guitar
        .search (guitar, 'electric')
        .pause(2000)
        .search(guitar, 'acoustic')
        .pause(2000)
        .search (guitar, 'drummer boy')
    },
    'drop down links tests': browser => {
        guitar
        .click('@homeButton')
            .depDropDowns(departments)
    },
    'used drop down links test': browser => {
            guitar
                .usedDropDowns(used)
    },
    'Vintage Drop Downs': browser => {
        guitar
        .vintageDropDowns(vintageArrays)
    },
    'Services Drop Down': browser => {
        guitar
        .servicesDropDowns()
    },
    'Guitar Center Link tab Test': browser => {
        guitar
        allLinks.forEach(test => {
            guitar.guitarLink(test)
        })
    },
    'Guitar Center log in': brower => {
        guitar
            .signInGuitar()
    },
}