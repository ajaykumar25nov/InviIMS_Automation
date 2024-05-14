const Timeout = require('../../timeout');

class IGI {

    async igi() {

        //Click on IGI tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[2]/div/div/a[6]/div').click();
        Timeout.timeout()

        //Click on Pending tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        Timeout.timeout()

        //Click on Start button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        Timeout.timeout()

        //Click on Status
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div/div').click();
        Timeout.timeout()
        //Select Pending
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        Timeout.timeout()

        //Click on Status
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div/div').click();
        Timeout.timeout()
        //Select In Progress
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        Timeout.timeout()

        //Enter Received
        await $('[name="items.0.receivedQty"]').setValue('20');
        await Timeout.timeout()

        //Click on Status
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div/div').click();
        Timeout.timeout()
        //Select Inspection Completed
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        Timeout.timeout()

        // //Click on Save Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter IGI Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('IGI20240405007');
        await Timeout.timeout()
        // //Click on 'Clear' Button
        // await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        // await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter IGI Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('IGI20240405007');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on 'Modify' option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // //Click on Save button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter IGI Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('IGI20240405008');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter IGI Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('IGI20240405008');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on 'Invert Into Inventory' option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // //Click on Invert button
        // await $('/html/body/div[3]/div[3]/div/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[3]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click
        await $('/html/body/div[2]/div[1]').click();
        await Timeout.timeout()

        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 5
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Next button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/div/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[3]/div/div/div[3]/button[1]').click();
        await Timeout.timeout()

    }
}

module.exports = new IGI();