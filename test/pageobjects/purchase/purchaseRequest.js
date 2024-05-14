const Timeout = require('../../timeout');

class PurchaseRequest {

    async purchaseRequest() {
        //Click on Purchase Request tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[2]/div').click();
        Timeout.timeout()

        //Click on Add PR Request Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        //Add PR Request page
        // //Click on Indentor
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div[1]/div[1]/div').click();
        // Timeout.timeout()
        // //Select Identor Name
        // await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        // Timeout.timeout()

        // //Click on Client Name
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div[1]/div[1]/div').click();
        // Timeout.timeout()
        // //Select Client Name
        // await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        // Timeout.timeout()

        //Click on Requested Sources
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div[2]/div[1]/div').click();
        Timeout.timeout()
        //Select Requested Sources
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        Timeout.timeout()

        // //Select Requested Sources (Other Option)
        // await $('/html/body/div[2]/div[3]/ul/li[6]').click();
        // Timeout.timeout()
        // //Enter Source Details
        // await $('[name="requestSourceDetails"]').setValue('Meeting');
        // await Timeout.timeout()

        // //Click on Project Name
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div[2]/div[1]/div').click();
        // Timeout.timeout()
        // //Select Project Name
        // await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        // Timeout.timeout()

        //Enter Expected Delivery Date
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div[3]/div/input').setValue('27/02/2024');
        // await Timeout.timeout()

        //Expected Delivery Date
        //Click on Calendar icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div[3]/div/div/button').click();
        Timeout.timeout()
        //Select Date
        await $('/html/body/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[5]/button[3]').click();
        Timeout.timeout()

        // //Click on Deliver to Warehouse
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[2]/div[3]/div[1]/div').click();
        // Timeout.timeout()
        // //Select Deliver to Warehouse
        // await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        // Timeout.timeout()

        //Import file
        //Click on Import Component
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/button[1]').click();
        Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/form/div[2]/button').click();
        Timeout.timeout()

        //Component Details

        //Click on + Add Component
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/button[2]').click();
        Timeout.timeout()

        //Click on Delete icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[2]/div[2]/button').click();
        Timeout.timeout()

        //Enter Notes
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div[1]/div[1]/div/textarea[1]').setValue('Notes about PR Request');
        await Timeout.timeout()

        // //Click on PR Request Approver
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div[1]/div[2]/div/div').click();
        // Timeout.timeout()
        // //Select PR Request Approver
        // await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        // Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Purchase Request Table
        //Click on Correction Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PRN20240215020');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()


        //Click on 'Modify' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div[2]/div[2]/div/textarea[1]').setValue('Modified Purchase Request');
        await Timeout.timeout()

        // //Click on Submit Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Purchase Request Table
        //Click on Approval Request Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[3]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PRN20240116004');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Approve' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on 'Approve' Radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[3]/div[1]/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'Reject' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[3]/div[1]/fieldset/div/label[2]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'Correction' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[3]/div[1]/fieldset/div/label[3]/span[1]/input').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[3]/div[1]/div/div/textarea[1]').setValue('Approved Purchase Request');
        await Timeout.timeout()

        // //Click on Submit Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Click on General Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[1]').click();
        await Timeout.timeout()


        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select In Approval
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select In Correction
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Approved
        await $('/html/body/div[2]/div[3]/ul/li[4]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Rejected
        await $('/html/body/div[2]/div[3]/ul/li[5]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Cancelled
        await $('/html/body/div[2]/div[3]/ul/li[6]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select All 
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PRN20240404004');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PRN20240405002');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //Click on 'Back' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PRN20240410001');
        await Timeout.timeout()
        //Click on 'Clear' Button

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //   //Click on 'Update' Button
        //   await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter PR Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PRN20240410001');
        await Timeout.timeout()
        //Click on 'Clear' Button

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on Cancel option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //   //Click on 'Cancel/Withdraw' Button
        //   await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //   await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Dense button
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/label/span[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 10
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 25
        await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        await Timeout.timeout()

        //Click on Rows per page
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/div/div/div[2]/div').click();
        await Timeout.timeout()

        //Select 5
        await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        await Timeout.timeout()

        //Click on Next button
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/div/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div[3]/div/div/div[3]/button[1]').click();
        await Timeout.timeout()
    }
}

module.exports = new PurchaseRequest();