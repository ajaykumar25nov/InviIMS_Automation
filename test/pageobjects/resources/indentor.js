const Timeout = require('../../timeout');

class Indentor {

    async indentor() {
        //Click on indentor tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[5]/div/div/a[2]/div').click();
        await Timeout.timeout()

        //Click on Add Indentor button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/div/button').click();
        await Timeout.timeout()

        //Enter Indentor Name
        await $('[name="name"]').setValue('Ajay Kumar');
        await Timeout.timeout()

        //Enter Contact Number
        await $('[name="contact"]').setValue('7985674527');
        await Timeout.timeout()

        //Enter User Email ID
        await $('[name="email"]').setValue('ajay@inevitableinfotech.com');
        await Timeout.timeout()

        //Click on Department
        await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[4]/div/div').click();
        await Timeout.timeout()
        //select department
        await $('/html/body/div[3]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        // // //Click on Add button
        // // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Indentor name
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('Ajay');
        await Timeout.timeout()
        //Click on Clear button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter email id
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('ajay8127');
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

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //  //Click on Update button
        //  await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        //  await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        await Timeout.timeout()

        //Click on Delete option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //  //Click on Delete button
        //  await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //  await Timeout.timeout()

        //Click on Cancel button
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

module.exports = new Indentor();