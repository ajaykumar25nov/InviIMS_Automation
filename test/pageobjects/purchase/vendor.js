const Timeout = require('../../timeout');

class Vendor {

    async vendor() {
        //Click on vendor tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[4]/div/div/a[1]/div').click();
        Timeout.timeout()

        //Click on Add Vendor Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        //Add Vendor
        //Enter Name
        await $('[name="name"]').setValue('Ajay_81');
        await Timeout.timeout()

        //Enter PAN Number
        await $('[name="panNumber"]').setValue('ABCDE1234E');
        await Timeout.timeout()

        //Enter Email Address
        await $('[name="email"]').setValue('ajay81ak@inevitableinfotech.com');
        await Timeout.timeout()

        // //Currency
        // //Click on Currency field
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[1]/div[4]/div/div').click();
        // await Timeout.timeout()
        // //Select Currency 
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[1]/div[4]/div/div').click();
        // await Timeout.timeout()

        //Enter Contact Number
        await $('[name="contact"]').setValue('7985674527');
        await Timeout.timeout()

        //Enter Website
        await $('[name="website"]').setValue('inevitableinfotech.com');
        await Timeout.timeout()

        //Enter GST Number
        await $('[name="gstNumber"]').setValue('22AAAGA0800A1Z5');
        await Timeout.timeout()

        //Address
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


        //Contact Person

        //Enter Name
        await $('[name="personName"]').setValue('Ajay');
        await Timeout.timeout()

        //Enter Email 
        await $('[name="personEmail"]').setValue('ajaysingh12@gmail.com');
        await Timeout.timeout()

        //Enter Contact Number
        await $('[name="personContactNumber"]').setValue('7906745623');
        await Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Vendor Name
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('Inevitable');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //   //Click on 'Edit' Button
        //   await $('/html/body/div/div/div/main/div/div[2]/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Back' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //   //Click on 'Update' Button
        //   await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Delete option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //   //Click on 'Delete' Button
        //   await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
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

module.exports = new Vendor();