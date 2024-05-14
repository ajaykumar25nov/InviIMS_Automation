const Timeout = require('../../timeout');

class Quotation {

    async quotation() {

        //Click on Quotation tab
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]/div/div/a[4]/div').click();
        Timeout.timeout()

        //Click on Add Quotation Button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        Timeout.timeout()

        // //Add Quotation page
        // //Click on RFQ Number
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div[1]/div/div/div').click();
        // Timeout.timeout()
        // //Select RFQ Number
        // await $('/html/body/div[2]/div[3]/ul/li[80]').click();
        // Timeout.timeout()

        //Enter Vendor Quotation Number
        await $('[name="venderQuotationId"]').setValue('QUOT0001');
        await Timeout.timeout()

        //Click on Calendar icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[2]/div/div/button').click();
        Timeout.timeout()
        //Select Quotation Date
        await $('/html/body/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[2]/button[6]').click();
        Timeout.timeout()

        //Enter Quotation Validity
        await $('[name="quotationValidity"]').setValue('28 Days');
        await Timeout.timeout()

        // //Click on Currency
        // await $('/html/body/div[1]/div/div/main/div/form/div[1]/div/div[2]/div[2]/div[4]/div/div').click();
        // Timeout.timeout()
        // //Select Currency
        // await $('/html/body/div[2]/div[3]/ul/li[1]').click();
        // Timeout.timeout()

        // //Click on Add Component button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[1]/div[2]/button').click();
        // Timeout.timeout()

        // //Add Component In Quotation Popup
        // //Click on IPN
        // await $('/html/body/div[2]/div[3]/div/form/div[1]/div/div[1]/div/div').click();
        // Timeout.timeout()
        // //Select IPN
        // await $('/html/body/div[3]/div[3]/ul/li').click();
        // Timeout.timeout()

        // //Enter Quoted Quantity
        // await $('[name="quotedQuantity"]').setValue('5');
        // await Timeout.timeout()

        // //Enter Minimum Quantity
        // await $('[name="minimumQuantity"]').setValue('2');
        // await Timeout.timeout()

        // //Enter Quoted Lead Time
        // await $('[name="quotedLeadTime"]').setValue('3 Days');
        // await Timeout.timeout()

        // //Enter Quoted Unit Price
        // await $('[name="quotedUnitPrice"]').setValue('500');
        // await Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        // //Click on Cancel Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        // Timeout.timeout()

        //Quotation Components Table
        // //Click on Delete icon
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[7]/button').click();
        // Timeout.timeout()

        // //Click on Delete Button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        // Timeout.timeout()

        // //Click on Cancel Button
        // await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        // Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //Payment Terms
        //Click on Full Payment radio Button
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div/fieldset/div/label[1]/span[1]/input').click();
        Timeout.timeout()

        // //Click on Partial radio Button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div/fieldset/div/label[2]/span[1]/input').click();
        // Timeout.timeout()

        // //Enter Event
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div[2]/div/div/div[1]/div/input').setValue('Delivered');
        // await Timeout.timeout()

        // //Enter Amount(%)
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div[2]/div/div/div[2]/div/input').setValue('50');
        // await Timeout.timeout()

        // //Click on Add Event
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div[3]/button').click();
        // Timeout.timeout()

        // //Click on Delete Icon
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[4]/div/div[1]/div[2]/div[2]/div/button').click();
        // Timeout.timeout()

        // //Click on Add Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        Timeout.timeout()

        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter Quotation Number
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('QUO20240227022');
        await Timeout.timeout()
        //Click on 'Clear' Button
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        // //Click on 'Update' Button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on 'Back' Button
        await $('/html/body/div/div/div/main/div/div[3]/button').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //    //Click on Update Button
        //    await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        //    await Timeout.timeout()

        //Click on Cancel Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
        await Timeout.timeout()

        //Click on Cancel option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //    //Click on Delete Button
        //    await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //    await Timeout.timeout()

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

module.exports = new Quotation();