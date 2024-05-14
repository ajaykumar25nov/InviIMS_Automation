const Timeout = require('../../timeout');

class ProformaInvoice {

    async proformaInvoice() {
        //Click on Proforma Invoice tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[6]/div').click();
        Timeout.timeout()

        //Click on Add Proforma Invoice Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        //Add Proforma Invoice page
        // //Click on PO Number
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select PO Number
        // await $('/html/body/div[2]/div[3]/ul/li[32]').click();
        // Timeout.timeout()

        //Enter Invoice Number
        await $('[name="invoiceNumber"]').setValue('IN0003');
        await Timeout.timeout()

        //Enter Invoice Amount
        await $('[name="invoiceAmount"]').setValue('500');
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[1]/div[1]/div/textarea[1]').setValue('Invoice for Purchase Order');
        await Timeout.timeout()

        // //Click on Invoice Verifier
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[1]/div[2]/div/div').click();
        // Timeout.timeout()
        // //Select Invoice Verifier
        // await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        // Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        Timeout.timeout()


        //Proforma Invoice Table
        //Click on Verification Request Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[3]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PI20240214004');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Verify' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        await Timeout.timeout()

        //Click on 'Verified' Radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        // //Click on Invoice Approver
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select Invoice Approver
        // await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        // Timeout.timeout()

        //Click on 'Correction' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/fieldset/div/label[2]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'Reject' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/fieldset/div/label[3]/span[1]/input').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div/div/textarea[1]').setValue('Verified Proforma Invoice');
        await Timeout.timeout()

        // //Click on Submit Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Proforma Invoice Table
        //Click on Correction Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PI20240220017');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Modify' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[1]/div[2]/div/textarea[1]').setValue('Modified Proforma Invoice');
        await Timeout.timeout()

        // //Click on Submit Correction Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Proforma Invoice Table
        //Click on Approval Request Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[4]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PI2024');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Approve' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/button').click();
        await Timeout.timeout()

        //Click on 'PI Approval' Radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[1]/div/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'PI Correction' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[1]/div/fieldset/div/label[2]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'PI Reject' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[1]/div/fieldset/div/label[3]/span[1]/input').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[1]/div/div/div/textarea[1]').setValue('Proforma Invoice Approved');
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
        //Select In Verification
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select In Approval
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
        //Select In Correction
        await $('/html/body/div[2]/div[3]/ul/li[6]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Paid
        await $('/html/body/div[2]/div[3]/ul/li[7]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select In Account
        await $('/html/body/div[2]/div[3]/ul/li[8]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select In Cancel
        await $('/html/body/div[2]/div[3]/ul/li[9]').click();
        await Timeout.timeout()

        //Click on Status field
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[1]/div/div').click();
        await Timeout.timeout()
        //Select Discard
        await $('/html/body/div[2]/div[3]/ul/li[10]').click();
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
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PI20240412001');
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
        await $('/html/body/div/div/div/main/div/form/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PI20240412001');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // //Click on Update button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').click();
        await Timeout.timeout()
        //Enter Invoice ID
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div[2]/div/input').setValue('PI20240412001');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on 'Update Status' option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //  //Click on Status
        await $('/html/body/div[3]/div[3]/div/form/div[1]/div/div/div/div').click();
        Timeout.timeout()
        //Select status (Paid)
        await $('/html/body/div[4]/div[3]/ul/li[1]').click();
        Timeout.timeout()

        //Select Status (Send To Accounts)
        //  await $('/html/body/div[4]/div[3]/ul/li[2]').click();
        //  Timeout.timeout()

        //Select Status (Reject By Accounts)
        //  await $('/html/body/div[4]/div[3]/ul/li[3]').click();
        //  Timeout.timeout()

        //Select Status (Cancel)
        //  await $('/html/body/div[4]/div[3]/ul/li[4]').click();
        //  Timeout.timeout()

        // //Click on Submit button
        // await $('/html/body/div[3]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[3]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on Discard option
        await $('/html/body/div[2]/div[3]/li[4]').click();
        await Timeout.timeout()

        // //Click on Delete button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
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

module.exports = new ProformaInvoice();