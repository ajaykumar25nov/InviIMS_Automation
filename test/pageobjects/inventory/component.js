const Timeout = require('../../timeout');

class Component {

    async component() {

        //Click on Component tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[2]/div/div/a[1]/div').click();
        await Timeout.timeout()

        //Click on Add Component button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/div/a').click();
        await Timeout.timeout()

        // //Add Component Page 
        // //Select Category
        // //Click on Category Field
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div/div[1]/div/div/div').click();
        // await Timeout.timeout()
        // //Select Category
        // await $('/html/body/div[2]/div[3]/ul/li[9]').click();
        // await Timeout.timeout()

        // //Select Sub Category
        // //Click on Sub Category Field
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div/div[2]/div/div/div').click();
        // await Timeout.timeout()
        // //Select Sub Category
        // await $('/html/body/div[2]/div[3]/ul/li').click();
        // await Timeout.timeout()

        //Enter IPN (Inevitable Part Number)
        await $('[name="ipn"]').setValue('IPN20240223001');
        await Timeout.timeout()

        //Enter Description
        await $('[name="shortDescription"]').setValue('MAX9668ETP+');
        await Timeout.timeout()

        //Select UOM(Unit Of Measure)
        //Click on UOM Field
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[1]/div/div[4]/div/div').click();
        await Timeout.timeout()
        //Select UOM
        await $('/html/body/div[2]/div[3]/ul/li[2]').click();
        await Timeout.timeout()

        //Enter HSN/SAC
        await $('[name="hsn_sac"]').setValue('12875647');
        await Timeout.timeout()

        //Enter Detailed Description
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[3]/div/div/textarea[1]').setValue('LCD Gamma Buffers 10-Bit Programmable Gamma Reference System with MTP for TFT LCDs');
        await Timeout.timeout()

        // //Category Attributes
        // //Attributes 1
        // await $('[name="attribute.0.value"]').setValue('Video Display');
        // await Timeout.timeout()
        // //Attributes 2
        // await $('[name="attribute.1.value"]').setValue('I²C');
        // await Timeout.timeout()
        // //Attributes 3
        // await $('[name="attribute.2.value"]').setValue('Converter');
        // await Timeout.timeout()
        // //Attributes 4
        // await $('[name="attribute.3.value"]').setValue('Surface Mount');
        // await Timeout.timeout()

        //Other Attributes
        //Attributes Type 1
        await $('[name="otherAttribute[0].type"]').setValue('Package / Case');
        await Timeout.timeout()
        //Attributes Description 1
        await $('[name="otherAttribute[0].description"]').setValue('20-WQFN Exposed Pad');
        await Timeout.timeout()

        //Click on + Attribute
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div[2]/button').click();
        await Timeout.timeout()

        //Attributes Type 2
        await $('[name="otherAttribute[1].type"]').setValue('Packaging');
        await Timeout.timeout()
        //Attributes Description 2
        await $('[name="otherAttribute[1].description"]').setValue('tube');
        await Timeout.timeout()

        //Click on + Attribute
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div[2]/button').click();
        await Timeout.timeout()

        //Attributes Type 3
        await $('[name="otherAttribute[2].type"]').setValue('Supplier Device Package');
        await Timeout.timeout()
        //Attributes Description 3
        await $('[name="otherAttribute[2].description"]').setValue('20-TQFN (5x5)');
        await Timeout.timeout()

        //Click on + Attribute
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div[2]/button').click();
        await Timeout.timeout()

        //Attributes Type 4
        await $('[name="otherAttribute[3].type"]').setValue('Voltage - Supply');
        await Timeout.timeout()
        //Attributes Description 4
        await $('[name="otherAttribute[3].description"]').setValue('2.7V ~ 3.6V');
        await Timeout.timeout()

        //Click on + Attribute
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Delete icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[2]/div[5]/div/button').click();
        await Timeout.timeout()

        // //Manufacturer Reference
        // //Enter Manufacturer Name
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div/div/div[1]/div[1]/div/div/input').setValue('Analog Devices 1');
        // await Timeout.timeout()

        // //Click on Add Manufacturer button
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div/div/div[1]/div[1]/div/div/input').click();
        // await Timeout.timeout()

        // //Add Manufacturer Popup
        // //Enter Manufacturer name
        // await $('[name="name"]').setValue('Analog Devices 1');
        // await Timeout.timeout()

        // //     //Click on 'Add' Button
        // //    await $('/html/body/div[2]/div[3]/div/form/div[2]/button[1]').click();
        // //    await Timeout.timeout()

        // //Click on 'Cancel' Button
        // await $('/html/body/div[2]/div[3]/div/form/div[2]/button[2]').click();
        // // await Timeout.timeout()
        // const a = await $('/html/body/dev[3]');
        // console.log(a);

        // await $(document.getElementsByTagName("body")
        // [0].children[(document.getElementsByTagName("body")[0].children).length-1]);
        // await Timeout.timeout()

        // //Click on Manufacturer Field
        // await $('/html/body/div/div/div/main/div/form/div[1]/div/div[6]/div[1]/div/div/div[1]/div[1]/div/div/div/button').click();
        // await Timeout.timeout()
        // await Timeout.timeout()

        // //Select Manufacturer
        // await $('/html/body/div[1]/div/div/main/div/form/div[1]/div/div[6]/div[1]/div/div/div[1]/div[1]/div/div/input').click();
        // await $('[value="Inevitable Electronics"]').click();

        // console.log(a ,"line 154");
        await Timeout.timeout()

        //Enter MPN
        await $('[name="manufacturer[0].mpn"]').setValue('MPN009668ETP');
        await Timeout.timeout()

        //Click on + Add Manufacturer Reference
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[7]/div[1]/div[2]/button').click();
        await Timeout.timeout()

        //Click on Delete icon
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[7]/div[2]/div[2]/div/div[2]/button').click();
        await Timeout.timeout()

        //Availabe For
        //Click on Check box for sales
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[8]/div[1]/div[1]/div[1]/label/span[1]/input').click();
        await Timeout.timeout()

        //Click on Check box for purchase
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[8]/div[1]/div[1]/div[2]/label/span[1]/input').click();
        await Timeout.timeout()

        //Click on Check box for status
        await $('/html/body/div/div/div/main/div/form/div[1]/div/div[8]/div[1]/div[2]/div/label/span[1]/input').click();
        await Timeout.timeout()

        //     //Click on 'Add' Button
        //    await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        //    await Timeout.timeout()

        //Click on 'Cancel' Button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()


        //Click on Search box
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Enter IPN Number
        await $('/html/body/div/div/div/main/div/div[2]/div[1]/div/div/input').setValue('IPN20240220001');
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

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //Click on Back button
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

        // //Click on Update button
        // await $('/html/body/div/div/div/main/div/form/div[2]/button[1]').click();
        // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/button').click();
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

module.exports = new Component();