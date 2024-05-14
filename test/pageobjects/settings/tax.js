const Timeout = require('../../timeout');

class Tax {

    async tax() {
        //Click on Tax tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[7]/div/div/a[1]/div').click();
        await Timeout.timeout()

        //GST Settings
        //Click on radio button for 'Yes'
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/form/div/div/div[1]/div/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        // //Click on radio button for 'No'
        // await $('/html/body/div/div/div/main/div/div[2]/div[1]/form/div/div/div[1]/div/fieldset/div/label[2]/span[1]/input').click();
        // await Timeout.timeout()

        //Enter GSTIN
        await $('[name="gstNumber"]').setValue('GST23456789345679');
        await Timeout.timeout()

        //GST Registered On
        //Click on Calendar icon
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/form/div/div/div[1]/div[2]/div[2]/div/div/button').click();
        await Timeout.timeout()
        //Select Date
        await $('/html/body/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[1]/button[1]').click();
        await Timeout.timeout()

        //Enter Business Legal Name
        await $('[name="legalName"]').setValue('Wal-Mart');
        await Timeout.timeout()

        //Enter Business Trade Name
        await $('[name="tradeName"]').setValue('FedEx');
        await Timeout.timeout()

        // //Click on Save Button
        // await $('/html/body/div/div/div/main/div/div[2]/div[1]/form/div/div/div[2]/button').click();
        // await Timeout.timeout()

        //Click on Add New Tax button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/button').click();
        await Timeout.timeout()

        //Enter Tax Name
        await $('[name="name"]').setValue('CGST');
        await Timeout.timeout()

        //Enter Rate(%)
        await $('[name="rate"]').setValue('18');
        await Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Switch button on Action
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/span/span[1]/input').click();
        await Timeout.timeout()

        // //Click on Update Button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
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

module.exports = new Tax();