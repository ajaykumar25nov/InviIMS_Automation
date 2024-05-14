const Timeout = require('../../timeout');

class RFQ {

    async rfq() {
        //Click on RFQ tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[3]/div').click();
        Timeout.timeout()

        //Click on + Generate RFQ button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        // //Click on PR Number
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div/div/div').click();
        // Timeout.timeout()
        // //Select Select PR Number
        // await $('/html/body/div[3]/div[3]/ul/li[19]').click();
        // Timeout.timeout()

        //Click on 'Generate' Button
        //   await $('/html/body/div[2]/div[3]/div/form/div[2]/div/a').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/div/button').click();
        await Timeout.timeout()

        //Click on Pending for RFQ Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        Timeout.timeout()

        //Click on Generate RFQ Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        Timeout.timeout()

        //Generate RFQ Page

        //Click on Component check box
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[1]/span/input').click();
        Timeout.timeout()

        // //Click on Vendor
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[1]/div/div/div[1]/div').click();
        // Timeout.timeout()
        // //Select Vendor
        // await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        // Timeout.timeout()

        //  //Click on T&C
        //  await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[2]/div/div[1]/div/div').click();
        //  Timeout.timeout()
        //  //Click on T&C
        //  await $('/html/body/div[2]/div[3]/ul/li[1]/span[1]/input').click();
        //  Timeout.timeout()
        //  //Select T&C
        //  await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        //  Timeout.timeout()

        //Enter Additional T&C
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[2]/div/div[2]/div/textarea[1]').setValue('Additional Terms and Conditions for RFQ');
        await Timeout.timeout()

        // //Click on Generate RFQ Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter RFQ
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('RFQ20240226070');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter RFQ
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('RFQ20240405002');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on View RFQ document option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Close button
        await $('/html/body/div[3]/div[3]/div/div/button').click();
        await Timeout.timeout()

        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter RFQ
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('RFQ20240405002');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on Download PDF option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on Send Email option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //   //Click on 'Send Email' Button
        //   await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        // //Click on triple dots
        // await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        // await Timeout.timeout()

        // //Click on Mark send to vendor option
        // await $('/html/body/div[2]/div[3]/li[4]').click();
        // await Timeout.timeout()        

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

module.exports = new RFQ();