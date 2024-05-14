const Timeout = require('../timeout');

class Dashboard {

    async dashboard() {
        //Click on Dashboard tab
        await Timeout.timeout()
        await $('/html/body/div/div/div[1]/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/a/div').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

    }
}

module.exports = new Dashboard();