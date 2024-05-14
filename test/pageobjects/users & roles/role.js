const Timeout = require('../../timeout');

const dashboardPath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div/div/div/table/tbody/tr');
const inventoryPath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div/div/div/table/tbody');
const purchasePath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/div/div/table/tbody');
const userRolePath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[5]/div/div/div/div[1]/div[2]/div/div/div/table/tbody');
const resourcesPath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[6]/div/div[2]/div/div[1]/div[2]/div/div/div/table/tbody');
const settingsPath = ('/html/body/div/div/div/main/div/form/div/div[2]/div[7]/div/div[2]/div/div[1]/div[2]/div/div/div/table/tbody');

class Role {

    async role() {
        //Click on Role tab
        await Timeout.timeout()
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[4]/div/div/a[2]/div').click();
        await Timeout.timeout()

        //Click on Add Role button
        await $('/html/body/div/div/div/main/div/div[1]/div/div[2]/a').click();
        await Timeout.timeout()

        //Add Role page 
        //Enter Role Name
        await $('[name="name"]').setValue('Employee');
        await Timeout.timeout()

        //Enter Description
        await $('/html/body/div/div/div/main/div/form/div/div[1]/div/div/div[2]/div/input').setValue('QA Engineer');
        await Timeout.timeout()

        //Dashboard
        //Click on dashboard check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[1]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //Click on full access check box for dashboard
        await $(`${dashboardPath}/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for dashboard
        await $(`${dashboardPath}/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for dashboard
        await $(`${dashboardPath}/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for dashboard
        await $(`${dashboardPath}/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for dashboard
        await $(`${dashboardPath}/td[6]/span/input`).click();
        await Timeout.timeout()


        // //Inventory module permission 
        //Click on inventory check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[2]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //1.Component
        //Click on full access check box for item
        await $(`${inventoryPath}/tr[1]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for item
        await $(`${inventoryPath}/tr[1]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for item
        await $(`${inventoryPath}/tr[1]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for item
        await $(`${inventoryPath}/tr[1]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for item
        await $(`${inventoryPath}/tr[1]/td[6]/span/input`).click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //2.Warehouse
        //Click on full access check box for warehouse
        await $(`${inventoryPath}/tr[2]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for warehouse
        await $(`${inventoryPath}/tr[2]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for warehouse
        await $(`${inventoryPath}/tr[2]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for warehouse
        await $(`${inventoryPath}/tr[2]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for warehouse
        await $(`${inventoryPath}/tr[2]/td[6]/span/input`).click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //3.CATEGORY
        //Click on full access check box for Category
        await $(`${inventoryPath}/tr[3]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Category
        await $(`${inventoryPath}/tr[3]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Category
        await $(`${inventoryPath}/tr[3]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Category
        await $(`${inventoryPath}/tr[3]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Category
        await $(`${inventoryPath}/tr[3]/td[6]/span/input`).click();
        await Timeout.timeout()

        //4.SUB CATEGORY
        //Click on full access check box for Sub Category
        await $(`${inventoryPath}/tr[4]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Sub Category
        await $(`${inventoryPath}/tr[4]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Sub Category
        await $(`${inventoryPath}/tr[4]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Sub Category
        await $(`${inventoryPath}/tr[4]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Sub Category
        await $(`${inventoryPath}/tr[4]/td[6]/span/input`).click();
        await Timeout.timeout()

        //5.STOCK
        //Click on full access check box for Stock
        await $(`${inventoryPath}/tr[5]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Stock
        await $(`${inventoryPath}/tr[5]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Stock
        await $(`${inventoryPath}/tr[5]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Stock
        await $(`${inventoryPath}/tr[5]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Stock
        await $(`${inventoryPath}/tr[5]/td[6]/span/input`).click();
        await Timeout.timeout()

        //6.IGI
        //Click on full access check box for IGI
        await $(`${inventoryPath}/tr[6]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for IGI
        await $(`${inventoryPath}/tr[6]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for IGI
        await $(`${inventoryPath}/tr[6]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for IGI
        await $(`${inventoryPath}/tr[6]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for IGI
        await $(`${inventoryPath}/tr[6]/td[6]/span/input`).click();
        await Timeout.timeout()


        // //PURCHASE module permission 
        //Click on purchase check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[3]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //1.VENDOR
        //Click on full access check box for vendor
        await $(`${purchasePath}/tr[1]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for vendor
        await $(`${purchasePath}/tr[1]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for vendor
        await $(`${purchasePath}/tr[1]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for vendor
        await $(`${purchasePath}/tr[1]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for vendor
        await $(`${purchasePath}/tr[1]/td[6]/span/input`).click();
        await Timeout.timeout()

        //2.PURCHASE REQUEST
        //Click on full access check box for purchase request
        await $(`${purchasePath}/tr[2]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for purchase request
        await $(`${purchasePath}/tr[2]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for purchase request
        await $(`${purchasePath}/tr[2]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for purchase request
        await $(`${purchasePath}/tr[2]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for purchase request
        await $(`${purchasePath}/tr[2]/td[6]/span/input`).click();
        await Timeout.timeout()

        //3.RFQ
        //Click on full access check box for RFQ
        await $(`${purchasePath}/tr[3]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for purchase RFQ
        await $(`${purchasePath}/tr[3]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for RFQ
        await $(`${purchasePath}/tr[3]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for RFQ
        await $(`${purchasePath}/tr[3]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for RFQ
        await $(`${purchasePath}/tr[3]/td[6]/span/input`).click();
        await Timeout.timeout()

        //4.QUOTATION
        //Click on full access check box for Quotation
        await $(`${purchasePath}/tr[4]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Quotation
        await $(`${purchasePath}/tr[4]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Quotation
        await $(`${purchasePath}/tr[4]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Quotation
        await $(`${purchasePath}/tr[4]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Quotation
        await $(`${purchasePath}/tr[4]/td[6]/span/input`).click();
        await Timeout.timeout()

        //5.PURCHASE ORDER
        //Click on full access check box for Purchase Order
        await $(`${purchasePath}/tr[5]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Purchase Order
        await $(`${purchasePath}/tr[5]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Purchase Order
        await $(`${purchasePath}/tr[5]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Purchase Order
        await $(`${purchasePath}/tr[5]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Purchase Order
        await $(`${purchasePath}/tr[5]/td[6]/span/input`).click();
        await Timeout.timeout()

        //6.PROFORMA INVOICE
        //Click on full access check box for Proforma Invoice
        await $(`${purchasePath}/tr[6]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Proforma Invoice
        await $(`${purchasePath}/tr[6]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Proforma Invoice
        await $(`${purchasePath}/tr[6]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Proforma Invoice
        await $(`${purchasePath}/tr[6]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Proforma Invoice
        await $(`${purchasePath}/tr[6]/td[6]/span/input`).click();
        await Timeout.timeout()

        //7.PURCHASE RECEIVE
        //Click on full access check box for Purchase Receive
        await $(`${purchasePath}/tr[7]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Purchase Receive
        await $(`${purchasePath}/tr[7]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Purchase Receive
        await $(`${purchasePath}/tr[7]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Purchase Receive
        await $(`${purchasePath}/tr[7]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Purchase Receive
        await $(`${purchasePath}/tr[7]/td[6]/span/input`).click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()


        // //USERS AND ROLES module permission 
        //Click on users and roles check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[5]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //1.USERS
        //Click on full access check box for users
        await $(`${userRolePath}/tr[1]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for users
        await $(`${userRolePath}/tr[1]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for users
        await $(`${userRolePath}/tr[1]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for users
        await $(`${userRolePath}/tr[1]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for users
        await $(`${userRolePath}/tr[1]/td[6]/span/input`).click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        //2.ROLES
        //Click on full access check box for roles
        await $(`${userRolePath}/tr[2]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for roles
        await $(`${userRolePath}/tr[2]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for roles
        await $(`${userRolePath}/tr[2]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for roles
        await $(`${userRolePath}/tr[2]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for roles
        await $(`${userRolePath}/tr[2]/td[6]/span/input`).click();
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        // //RESOURCES module permission 
        //Click on resources check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[6]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //1.MANUFACTURER
        //Click on full access check box for Client
        await $(`${resourcesPath}/tr[1]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Client
        await $(`${resourcesPath}/tr[1]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Notification
        await $(`${resourcesPath}/tr[1]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Client
        await $(`${resourcesPath}/tr[1]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Client
        await $(`${resourcesPath}/tr[1]/td[6]/span/input`).click();
        await Timeout.timeout()

        //2.INDENTOR
        //Click on full access check box for Client
        await $(`${resourcesPath}/tr[2]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Client
        await $(`${resourcesPath}/tr[2]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Notification
        await $(`${resourcesPath}/tr[2]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Client
        await $(`${resourcesPath}/tr[2]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Client
        await $(`${resourcesPath}/tr[2]/td[6]/span/input`).click();
        await Timeout.timeout()

        //3.CLIENT
        //Click on full access check box for Client
        await $(`${resourcesPath}/tr[3]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Client
        await $(`${resourcesPath}/tr[3]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Notification
        await $(`${resourcesPath}/tr[3]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Client
        await $(`${resourcesPath}/tr[3]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Client
        await $(`${resourcesPath}/tr[3]/td[6]/span/input`).click();
        await Timeout.timeout()


        // //SETTINGS module permission 
        //Click on settings check box
        await $(`/html/body/div/div/div/main/div/form/div/div[2]/div[7]/div/div[1]/span/input`).click();
        await Timeout.timeout()

        //1.TAX
        //Click on full access check box for tax
        await $(`${settingsPath}/tr[1]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for tax
        await $(`${settingsPath}/tr[1]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for tax
        await $(`${settingsPath}/tr[1]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for tax
        await $(`${settingsPath}/tr[1]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for tax
        await $(`${settingsPath}/tr[1]/td[6]/span/input`).click();
        await Timeout.timeout()

        //2.CURRENCY
        //Click on full access check box for currency
        await $(`${settingsPath}/tr[2]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for currency
        await $(`${settingsPath}/tr[2]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for currency
        await $(`${settingsPath}/tr[2]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for currency
        await $(`${settingsPath}/tr[2]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for currency
        await $(`${settingsPath}/tr[2]/td[6]/span/input`).click();
        await Timeout.timeout()

        //3.EMAIL
        //Click on full access check box for email
        await $(`${settingsPath}/tr[3]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for email
        await $(`${settingsPath}/tr[3]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for email
        await $(`${settingsPath}/tr[3]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for email
        await $(`${settingsPath}/tr[3]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for email
        await $(`${settingsPath}/tr[3]/td[6]/span/input`).click();
        await Timeout.timeout()

        //4.POLICES
        //Click on full access check box for policies
        await $(`${settingsPath}/tr[4]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for policies
        await $(`${settingsPath}/tr[4]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for policies
        await $(`${settingsPath}/tr[4]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for policies
        await $(`${settingsPath}/tr[4]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for policies
        await $(`${settingsPath}/tr[4]/td[6]/span/input`).click();
        await Timeout.timeout()

        //5.NOTIFICATION
        //Click on full access check box for Notification
        await $(`${settingsPath}/tr[5]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Notification
        await $(`${settingsPath}/tr[5]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Notification
        await $(`${settingsPath}/tr[5]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Notification
        await $(`${settingsPath}/tr[5]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Notification
        await $(`${settingsPath}/tr[5]/td[6]/span/input`).click();
        await Timeout.timeout()

        //6.PROJECT
        //Click on full access check box for Project
        await $(`${settingsPath}/tr[6]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Project
        await $(`${settingsPath}/tr[6]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Project
        await $(`${settingsPath}/tr[6]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Project
        await $(`${settingsPath}/tr[6]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Project
        await $(`${settingsPath}/tr[6]/td[6]/span/input`).click();
        await Timeout.timeout()

        //7.TERMS AND CONDITIONS
        //Click on full access check box for Terms & Conditions
        await $(`${settingsPath}/tr[7]/td[2]/span/input`).click();
        await Timeout.timeout()
        //Click on create check box for Terms & Conditions
        await $(`${settingsPath}/tr[7]/td[3]/span/input`).click();
        await Timeout.timeout()
        //Click on edit check box for Terms & Conditions
        await $(`${settingsPath}/tr[7]/td[4]/span/input`).click();
        await Timeout.timeout()
        //Click on view check box for Terms & Conditions
        await $(`${settingsPath}/tr[7]/td[5]/span/input`).click();
        await Timeout.timeout()
        //Click on delete check box for Terms & Conditions
        await $(`${settingsPath}/tr[7]/td[6]/span/input`).click();
        await Timeout.timeout()

        // //Click on Add button
        // // await $('/html/body/div/div/div/main/div/form/div/div[3]/button[1]').click();
        // // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div/main/div/form/div/div[3]/button[2]').click();
        await Timeout.timeout()


        // //Role Details table
        //Click on Search box
        await $('/html/body/div[1]/div/div[1]/main/div/div[2]/div[1]/div/div/input').click();
        await Timeout.timeout()
        //Search with 'Employee' Role name
        await $('/html/body/div[1]/div/div[1]/main/div/div[2]/div[1]/div/div/input').setValue('Employee');
        await Timeout.timeout()

        //Click on Clear button
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[1]/button').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on Arrow icon
        await $('/html/body/div/div/div/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/thead/tr/th[1]/span').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div[1]/div/div[1]/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on View option
        await $('/html/body/div[2]/div[3]/li[1]').click();
        await Timeout.timeout()

        await browser.scroll(0, 400)
        await Timeout.timeout()

        await browser.scroll(0, 400)
        await Timeout.timeout()

        await browser.scroll(0, 400)
        await Timeout.timeout()

        await browser.scroll(0, 200)
        await Timeout.timeout()

        // //Click on Edit button
        // await $('/html/body/div/div/div/main/div/form/div/div[3]/button[1]').click();
        // await Timeout.timeout()

        //Click on Back button
        await $('/html/body/div/div/div/main/div/form/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div[1]/div/div[1]/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Edit option
        await $('/html/body/div[2]/div[3]/li[2]').click();
        await Timeout.timeout()

        // // //  Click on Update button
        // // await $('/html/body/div/div/div[1]/main/div/form/div/div[3]/button[1]').click();
        // // await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div/div/div[1]/main/div/form/div/div[3]/button[2]').click();
        await Timeout.timeout()

        //Click on triple dots
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[2]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/button').click();
        await Timeout.timeout()

        //Click on Delete option
        await $('/html/body/div[2]/div[3]/li[3]').click();
        await Timeout.timeout()

        //Delete popup
        //    //Click on Delete button
        //    await $('/html/body/div[2]/div[3]/div/div[2]/button[1]').click();
        //    await Timeout.timeout()

        //Click on Cancel button
        await $('/html/body/div[2]/div[3]/div/div[2]/button[2]').click();
        await Timeout.timeout()

        //Click on Dense
        await $('/html/body/div/div/div[1]/main/div/div[2]/div[3]/label/span[1]/span[1]/input').click();
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

module.exports = new Role();