const Timeout = require('../../timeout');

class Currency {

    async currency() {
        //Click on Currency tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[6]/div/div/a[2]/div').click();
        await Timeout.timeout()

        //Click on Add New Currency button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/button').click();
        await Timeout.timeout()

        //Enter Currency Name
        await $('[name="name"]').setValue('Dollar');
        await Timeout.timeout()

        //Enter Currency Symbol
        await $('[name="symbol"]').setValue('$');
        await Timeout.timeout()

        // //Click on Save Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // //Click on Update button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/button').click();
        await Timeout.timeout()

        //Click on Delete option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        // //Click on Delete button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 5
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Next button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[3]/button[1]').click();
        await Timeout.timeout()

    }
}

module.exports = new Currency();