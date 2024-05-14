const Timeout = require('../../timeout');

class Stock {

    async stock() {

        //Click on Stock tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[2]/div/div/a[5]/div').click();
        await Timeout.timeout()

        //Click on Add Stock button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/div/button[1]').click();
        await Timeout.timeout()

        //Add Stock popup
        //Enter IPN
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[1]/div/div/input').setValue('IPN20230710002');
        await Timeout.timeout()

        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[1]/div/div/input').click()
        // await Timeout.timeout()
        // //Select IPN
        // await $('[value="IPN20230710002"]').click();
        // await Timeout.timeout()

        // //Click on Warehouse
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[2]/div/div').click();
        // await Timeout.timeout()
        // //Select Warehouse name
        // await $('/html/body/div[3]/div[3]/ul/li[3]').click();
        // await Timeout.timeout()

        //Enter Stock
        await $('[name="stock"]').setValue('2');
        await Timeout.timeout()

        // //Click on Add button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search Stock button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Search Stock popup
        //Click on IPN field
        // await $('/html/body/div[2]/div[3]/div/div[1]/div/div[1]/div/div/div/input').click()
        // await Timeout.timeout()
        // //Select IPN
        // await $('[value="IPN20230710002"]').click();
        // await Timeout.timeout()

        await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[1]/div/button').click();
        await Timeout.timeout()


        //Click on Consume Stock button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/div/button[3]').click();
        await Timeout.timeout()

        //Assign Stock popup
        //Enter IPN
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[1]/div/div/input').setValue('IPN20230710002');
        await Timeout.timeout()

        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[1]/div/div/input').click()
        // await Timeout.timeout()
        // //Select IPN
        // await $('[value="IPN20230710002"]').click();
        // await Timeout.timeout()

        // //Click on Warehouse
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div[2]/div/div').click();
        // await Timeout.timeout()
        // //Select Warehouse name
        // await $('/html/body/div[3]/div[3]/ul/li[3]').click();
        // await Timeout.timeout()

        //Enter Assign Stock
        // await $('[name="assignStock"]').setValue('2');
        await Timeout.timeout()

        //Additional Details

        // //Click on Project
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[3]/div[1]/div[1]/div/div').click();
        // await Timeout.timeout()
        // //Select Project name
        // await $('/html/body/div[3]/div[3]/ul/li[3]').click();
        // await Timeout.timeout()

        // //Click on Client
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[3]/div[1]/div[2]/div/div').click();
        // await Timeout.timeout()
        // //Select Client name
        // await $('/html/body/div[3]/div[3]/ul/li[2]').click();
        // await Timeout.timeout()

        //Enter Assign To
        await $('[name="assignTo"]').setValue('Ajay Kumar');
        await Timeout.timeout()

        // //Click on Assign button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/div[2]/button[2]').click();
        await Timeout.timeout()


        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Warehouse Name
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('Warehouse');
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

        //Click on History button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/a').click();
        await Timeout.timeout()

        //Stock History page
        await Timeout.timeout()
        await Timeout.timeout()
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[3]/button').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div/main/div/div[2]/div[3]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[3]/div/div/div[2]/div').click();
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

module.exports = new Stock();