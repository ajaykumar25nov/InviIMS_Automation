const Timeout = require('../../timeout');

class PurchaseOrder {

    async purchaseOrder() {
        //Click on Purchase Order tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[5]/div').click();
        Timeout.timeout()

        //Click on Add Purchase Order Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        //PO Generation page
        // //Click on PR Number
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[1]/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select PR Number
        // await $('/html/body/div[2]/div[3]/ul/li[18]').click();
        // Timeout.timeout()

        // //Click on Vendor
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[1]/div[2]/div/div').click();
        // Timeout.timeout()
        // //Select Vendor
        // await $('/html/body/div[2]/div[3]/ul/li[3]').click();
        // Timeout.timeout()

        // //Click on Quotation
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[1]/div[3]/div/div').click();
        // Timeout.timeout()
        // //Select Quotation
        // await $('/html/body/div[2]/div[3]/ul/li[21]').click();
        // Timeout.timeout()

        //Enter Voucher Number
        await $('[name="voucherNumber"]').setValue('VN006768');
        await Timeout.timeout()

        //Click on Calendar icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div/div[2]/div/div/button').click();
        Timeout.timeout()
        //Select Voucher Date
        await $('/html/body/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[2]/button[6]').click();
        Timeout.timeout()

        //Enter Dispatch Through
        await $('[name="dispatchThrough"]').setValue('abc');
        await Timeout.timeout()

        //Enter Destination
        await $('[name="destination"]').setValue('Hazratganj');
        await Timeout.timeout()

        //Enter City/Port of Loading
        await $('[name="portOfLoading"]').setValue('Lucknow');
        await Timeout.timeout()

        //Enter City/Port of Discharge
        await $('[name="portOfDischarge"]').setValue('Lucknow');
        await Timeout.timeout()

        // //Click on Add Component button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[5]/div[1]/div[2]/button').click();
        // Timeout.timeout()

        // //Add Component Popup
        // //Click on IPN
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select IPN
        // await $('/html/body/div[3]/div[3]/ul/li').click();
        // Timeout.timeout()

        // //Enter PO Quantity
        // await $('[name="poQuantity"]').setValue('0');
        // await Timeout.timeout()

        // //Click on Add Button
        // // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        // // //Click on Cancel Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        // Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        // //Click on PO Verifier
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[6]/div[1]/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select PO Verifier
        // await $('/html/body/div[2]/div[3]/ul/li[9]').click();
        // Timeout.timeout()

        //  //Click on T&C
        //  await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[6]/div[1]/div[2]/div/div').click();
        //  Timeout.timeout()
        //  //Click on T&C
        //  await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        //  Timeout.timeout()
        //  //Select T&C
        //  await $('/html/body/div[2]/div[3]/ul/li[3]/span[1]/input').click();
        //  Timeout.timeout()

        //Enter Additional T&C
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[2]/div/textarea[1]').setValue('Additional Terms and Conditions for RFQ');
        await Timeout.timeout()

        // //Click on PO Generation Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        Timeout.timeout()


        //Purchase Order Table
        //Click on Verification Request Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[3]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240220032');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Verify' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on 'Verified' Radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        // //Click on PO Approver
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select PO Approver
        // await $('/html/body/div[2]/div[3]/ul/li[4]').click();
        // Timeout.timeout()

        //Click on 'Correction' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[2]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'Reject' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[3]/span[1]/input').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/div/div/textarea[1]').setValue('Verified Purchase Order');
        await Timeout.timeout()

        // //Click on Submit Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Purchase Order Table
        //Click on Correction Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240220033');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Modify' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div/div[6]/div[1]/div[2]/div/div/textarea[1]').setValue('Modified Purchase Order');
        await Timeout.timeout()

        // //Click on Submit Correction Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Purchase Order Table
        //Click on Approval Request Tab
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div/button[4]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240227037');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on 'Approve' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on 'PO Approval' Radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[1]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'PO Correction' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[2]/span[1]/input').click();
        await Timeout.timeout()

        //Click on 'PO Reject' Radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/fieldset/div/label[3]/span[1]/input').click();
        await Timeout.timeout()

        //Enter Comment
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[1]/div/div/textarea[1]').setValue('Purchase Order Approved');
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

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240412001');
        await Timeout.timeout()
        // //Click on 'Clear' Button
        // await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/button').click();
        // await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/form/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240412001');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // //Click on Update PO button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240405006');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/form/div[2]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter PO Number
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[1]/div/div/input').setValue('PO20240405006');
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on 'Status' option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        //  //Click on Tracking Status
        await $('/html/body/div[3]/div[3]/div/form/div[1]/div/div/div/div').click();
        Timeout.timeout()
        //Select status (Send To Vendor)
        await $('/html/body/div[4]/div[3]/ul/li[1]').click();
        Timeout.timeout()

        //Select Status (Order Confirmed)
        //  await $('/html/body/div[4]/div[3]/ul/li[2]').click();
        //  Timeout.timeout()

        //Select Status (Order Dispatched)
        //  await $('/html/body/div[4]/div[3]/ul/li[3]').click();
        //  Timeout.timeout()

        //Select Status (Order Cancel)
        //  await $('/html/body/div[4]/div[3]/ul/li[4]').click();
        //  Timeout.timeout()

        // //Click on Submit button
        // await $('/html/body/div[3]/div[3]/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[3]/div[3]/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on Download PDF option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/button').click();
        await Timeout.timeout()

        //Click on Delete option
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

module.exports = new PurchaseOrder();