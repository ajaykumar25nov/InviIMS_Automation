const Timeout = require('../../timeout');

class Profile {

    async profile() {
        //Click on Profile option
        await Timeout.timeout()
        await $('/html/body/div[2]/div[3]/div[2]/li').click();
        await Timeout.timeout()

        //Click on Profile tab
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/button[1]').click();
        await Timeout.timeout()

        // //Update User Name
        // await $('[name="name"]').setValue('Ajay');
        // await Timeout.timeout()

        // //Update Contact Number
        // await $('[name="phoneNumber"]').setValue('7985674527');
        // await Timeout.timeout()

        // await browser.scroll(0, 200)
        // await Timeout.timeout()

        // //Update Address
        // await $('[name="address"]').setValue('6 Park Road');
        // await Timeout.timeout()

        // //Update City
        // await $('[name="city"]').setValue('Lucknow');
        // await Timeout.timeout()

        // //Update State
        // await $('[name="state"]').setValue('Uttar Pradesh');
        // await Timeout.timeout()

        // //Click on Country
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[8]/div/select').click();
        // await Timeout.timeout()
        // //Select Country Name
        // await $('[value="India"]').click();
        // await Timeout.timeout()

        // //Click on Save Changes button
        // await $('/html/body/div/div/div/main/div/div[3]/form/div/div[2]/div/div[2]/button').click();
        // await Timeout.timeout()

        //Click on Change Password tab
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Enter Current Password
        await $('[name="currentPassword"]').setValue('Ajay@12');
        await Timeout.timeout()

        //Enter New Password
        await $('[name="password"]').setValue('Ajay@12');
        await Timeout.timeout()

        //Enter Confirm New Password
        await $('[name="confirmNewPassword"]').setValue('Ajay@12');
        await Timeout.timeout()

        // //Click on eye icon
        // await $('/html/body/div/div/div/main/div/div[3]/form/div/div/button').click();
        // // await Timeout.timeout()

        // await $('/html/body/div/div/div/main/div/div[3]/form/div/div/button').click();
        // // await Timeout.timeout()

        // //Click on Save Changes button
        // await $('/html/body/div/div/div/main/div/div[3]/form/div/div/button').click();
        // await Timeout.timeout()

    }
}
module.exports = new Profile();