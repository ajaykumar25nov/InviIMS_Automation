const Timeout = require('../../timeout');

class Warehouse {

    async warehouse() {

        //Click on Warehouse tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[2]/div/div/a[2]/div').click();
        await Timeout.timeout()

        //Click on Add Warehouse button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/button').click();
        await Timeout.timeout()

        //Add Warehouse popup
        //Enter Warehouse Name
        await $('[name="name"]').setValue('Inevitable Group');
        await Timeout.timeout()

        //Enter Contact Number
        await $('[name="phoneNumber"]').setValue('7905522674');
        await Timeout.timeout()

        //Enter Address
        await $('[name="address"]').setValue('6 Park Road');
        await Timeout.timeout()

        //Enter City
        await $('[name="city"]').setValue('Lucknow');
        await Timeout.timeout()

        //Enter State
        await $('[name="state"]').setValue('Uttar Pradesh');
        await Timeout.timeout()

        //Click on Country field
        await $('[name="country"]').click();
        await Timeout.timeout()
        //Select Country Name
        await $('[value="India"]').click();
        await Timeout.timeout()

        //Enter PIN Code
        await $('[name="pincode"]').setValue('226001');
        await Timeout.timeout()

        //Enter GST Number
        await $('[name="gstNumber"]').setValue('22AAAAA0000A1Z5');
        await Timeout.timeout()

        //Click on Status
        await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[9]/label/span[1]/input').click();
        await Timeout.timeout()

        // //Click on Add button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Warehouse Name
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('Inevitable');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //   //Click on 'Edit' Button
        //   await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //   //Click on 'Update' Button
        //   await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
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
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[3]/label/span[1]/span[1]/input').click();
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

module.exports = new Warehouse();