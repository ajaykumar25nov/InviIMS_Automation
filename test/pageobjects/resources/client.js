const Timeout = require('../../timeout');

class Client {

    async client() {
        //Click on Client tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[5]/div/div/a[3]/div').click();
        await Timeout.timeout()

        //Click on Add Client button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        await Timeout.timeout()

        //Enter Client Name
        await $('[name="name"]').setValue('Inevitable Groups');
        await Timeout.timeout()

        //Enter PAN Number
        await $('[name="panNumber"]').setValue('ABCDE1234E');
        await Timeout.timeout()

        //Enter Email Address
        await $('[name="email"]').setValue('inevitable@group.com');
        await Timeout.timeout()

        //Enter Contact Number
        await $('[name="contactNumber"]').setValue('7985674527');
        await Timeout.timeout()

        //Enter GST Number
        await $('[name="gstNumber"]').setValue('22AAAGA0800A1Z5');
        await Timeout.timeout()

        //Billing Address
        //Enter Address
        await $('[name="billing.address"]').setValue('6 Park Road, Hazratganj');
        await Timeout.timeout()

        //Enter City
        await $('[name="billing.city"]').setValue('Lucknow');
        await Timeout.timeout()

        //Enter State
        await $('[name="billing.state"]').setValue('Uttar Pradesh');
        await Timeout.timeout()

        //Enter State Code
        await $('[name="billing.stateCode"]').setValue('09');
        await Timeout.timeout()

        //Click on Country field
        await $('[name="billing.country"]').click();
        await Timeout.timeout()
        //Select Country Name
        await $('[value="India"]').click();
        await Timeout.timeout()

        //Enter PIN Code
        await $('[name="billing.pinCode"]').setValue('226001');
        await Timeout.timeout()


        //Shipping Address

        //Click on check box if 'same as Billing Address'
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[6]/span/input').click();
        await Timeout.timeout()

        // //Enter Address
        // await $('[name="shipping.address"]').setValue('8 Park Road, Hazratganj');
        // await Timeout.timeout()

        // //Enter City
        // await $('[name="shipping.city"]').setValue('Lucknow');
        // await Timeout.timeout()

        // //Enter State
        // await $('[name="shipping.state"]').setValue('Uttar Pradesh');
        // await Timeout.timeout()

        // //Enter State Code
        // await $('[name="shipping.stateCode"]').setValue('Uttar Pradesh');
        // await Timeout.timeout()

        // //Click on Country field
        // await $('[name="shipping.country"]').click();
        // await Timeout.timeout()
        // //Select Country Name
        // await $('[value="India"]').click();
        // await Timeout.timeout()

        // //Enter PIN Code
        // await $('[name="shipping.pinCode"]').setValue('226001');
        // await Timeout.timeout()


        //Contact Person

        //Enter Name
        await $('[name="personName"]').setValue('Ajay');
        await Timeout.timeout()

        //Enter Email Address
        await $('[name="personEmail"]').setValue('ajay81@inevitableinfotech.com');
        await Timeout.timeout()

        //Enter Contact Number
        await $('[name="personContactNumber"]').setValue('7985674527');
        await Timeout.timeout()

        // //Click on Add button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Client name
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('Ajay');
        await Timeout.timeout()
        //Click on Clear button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter email id
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('ajay@');
        await Timeout.timeout()
        //Click on Clear button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Update Status
        //Click on switch button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[4]/span/span[1]/input').click();
        await Timeout.timeout()

        // Click on Update button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        // //Click on Edit button
        // await $('/html/body/div/div/div/main/div/div[2]/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //  //Click on Update button
        //  await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        //  await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 5
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Next button
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/div/div/div[3]/button[1]').click();
        await Timeout.timeout()

    }
}

module.exports = new Client();