const Timeout = require('../../timeout');

class PurchaseReceive {

    async purchaseReceive() {

        //Click on Purchase Receive tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[7]/div').click();
        Timeout.timeout()

        //Click on Add Purchase Receive Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        //Add Purchase Receive page
        // //Click on PO Number
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div/div/div').click();
        // Timeout.timeout()
        // //Select PO Number
        // await $('/html/body/div[2]/div[3]/ul/li[35]').click();
        // Timeout.timeout()


        //Components
        // //Enter Base Price
        // await $('[name="items[0].basePrice"]').setValue('100');
        // await Timeout.timeout()

        // //Enter GST
        // await $('[name="items[0].gst"]').setValue('10');
        // await Timeout.timeout()

        // //Enter Custom Duty
        // await $('[name="items[0].customDuty"]').setValue('50');
        // await Timeout.timeout()

        // //Enter Fright Charges
        // await $('[name="items[0].frightCharges"]').setValue('50');
        // await Timeout.timeout()

        //Enter Other Charges
        await $('[name="otherCharges"]').setValue('50');
        await Timeout.timeout()


        //TAX Invoice Details
        //Enter Invoice Number
        await $('[name="taxInvoiceNumber"]').setValue('INV00012');
        await Timeout.timeout()

        //Click on Calendar icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div[2]/div/div/button').click();
        Timeout.timeout()
        //Select Invoice Date
        await $('/html/body/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[2]/button[6]').click();
        Timeout.timeout()

        //Enter Sub Total
        await $('[name="taxSubtotal"]').setValue('50');
        await Timeout.timeout()

        //Enter GST
        await $('[name="taxGst"]').setValue('10');
        await Timeout.timeout()

        //Enter Total
        await $('[name="taxTotal"]').setValue('4010');
        await Timeout.timeout()

        // //Click on Submit Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        Timeout.timeout()


        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Purchase Receive Number
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('PRE20240408001');
        await Timeout.timeout()
        // //Click on 'Clear' Button
        // await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        // await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/div[3]/button').click();
        await Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Purchase Receive Number
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('PRE20240408001');
        await Timeout.timeout()

        // //Click on triple dots
        // await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
        // await Timeout.timeout()

        // //Click on 'Mark Send to IGI' option
        // await $('/html/body/div[2]/div[3]/li[2]').click();
        // await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/button').click();
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

        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
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

module.exports = new PurchaseReceive();