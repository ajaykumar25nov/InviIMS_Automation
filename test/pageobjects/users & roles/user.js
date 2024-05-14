const Timeout = require('../../timeout');

class User {

    async user() {
        //Click on User tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[4]/div/div/a[1]/div').click();
        await Timeout.timeout()

        //Click on Add User button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        await Timeout.timeout()

        //Add User page 
        //Enter User Name
        await $('[name="name"]').setValue('Ajay');
        await Timeout.timeout()

        //Enter User Email ID
        await $('[name="email"]').setValue('ajay@inevitableinfotech.com');
        await Timeout.timeout()

        // //Enter Role
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[3]/div/div[1]/input').setValue('Head Tester');
        // await Timeout.timeout()

        // //Click on Role
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[3]/div[1]/div').click();
        // await Timeout.timeout()
        // //select role
        // await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        // await Timeout.timeout()

        //Enter Contact Number
        await $('[name="phoneNumber"]').setValue('7985674527');
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //Enter Address
        await $('[name="address"]').setValue('6 Park Road');
        await Timeout.timeout()

        //Enter State
        await $('[name="state"]').setValue('Uttar Pradesh');
        await Timeout.timeout()

        //Enter City
        await $('[name="city"]').setValue('Lucknow');
        await Timeout.timeout()

        //Click on Country
        await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[8]/div/select').click();
        await Timeout.timeout()
        //Select Country Name
        await $('[value="India"]').click();
        await Timeout.timeout()

        //Enter PINcode
        await $('[name="pincode"]').setValue('226001');
        await Timeout.timeout()

        //Select Active Status
        await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[10]/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        // //Select Inactive Status
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/div[10]/fieldset/div/label[2]/span[1]/input').click();
        // await Timeout.timeout()

        // //Click on Add button
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[3]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[3]/button[2]').click();
        await Timeout.timeout()


        //Employee Table
        //Click on Inactive Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Click on All Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[3]').click();
        await Timeout.timeout()

        //Click on Active Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[1]').click();
        await Timeout.timeout()


        //Click on Role field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Admin
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Role field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Employee
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Role field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select All role
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter User name
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/input').setValue('Ajay');
        await Timeout.timeout()
        //Click on Clear button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        // //Click on Edit Button
        // await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[3]/button[1]').click();
        // await Timeout.timeout()

        //Click on Back Button
        await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()


        //  //Click on Update button
        //  await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[3]/button[1]').click();
        //  await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div/div[2]/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Delete option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //Delete Popup
        //  //Click on Delete button
        //  await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //  await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[4]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[4]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[4]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[4]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 5
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Next button
        await $('/html/body/div/div/div/main/div/div[2]/div[4]/div/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[4]/div/div/div[3]/button[1]').click();
        await Timeout.timeout()

    }
}
module.exports = new User();