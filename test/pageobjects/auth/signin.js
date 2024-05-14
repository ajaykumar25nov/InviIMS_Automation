const Timeout = require('../../timeout');

class Signin {

    async signin() {

        //Enter Email ID
        await $('[name="email"]').setValue('ajay@inevitableinfotech.com');
        await Timeout.timeout()

        //Enter Password
        await $('[name="password"]').setValue('Ajay@12');
        await Timeout.timeout()

        //Click on Signin button
        await $('/html/body/div/div/main/div[2]/div/form/button').click();
        await Timeout.timeout()

    }
}

module.exports = new Signin();