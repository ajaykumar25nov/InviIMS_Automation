const Timeout = require('../timeout');
const UserRoleTab = require('../mainTab/users&roles');
const ResourcesTab = require('../mainTab/resources');
const SettingsTab = require('../mainTab/settings');
const InventoryTab = require('../mainTab/inventory');
const PurchaseTab = require('../mainTab/purchase');
const ProfileMenu = require('../mainTab/profile');

const Signin = require('../pageobjects/auth/signin');
const Dashboard = require('../pageobjects/dashboard');

const Role = require('../pageobjects/users & roles/role');
const User = require('../pageobjects/users & roles/user');
const Profile = require('../pageobjects/users & roles/profile');

const Manufacturer = require('../pageobjects/resources/manufacturer');
const Indentor = require('../pageobjects/resources/indentor');
const Client = require('../pageobjects/resources/client');

const Tax = require('../pageobjects/settings/tax');
const Currency = require('../pageobjects/settings/currency');
const Project = require('../pageobjects/settings/project');
const TermsAndConditions = require('../pageobjects/settings/t&c');

const Category = require('../pageobjects/inventory/category');
const SubCategory = require('../pageobjects/inventory/subCategory');
const Component = require('../pageobjects/inventory/component');
const Warehouse = require('../pageobjects/inventory/warehouse');
const Stock = require('../pageobjects/inventory/stock');
const IGI = require('../pageobjects/inventory/igi');

const Vendor = require('../pageobjects/purchase/vendor');
const PurchaseRequest = require('../pageobjects/purchase/purchaseRequest');
const RFQ = require('../pageobjects/purchase/rfq');
const Quotation = require('../pageobjects/purchase/quotation');
const PurchaseOrder = require('../pageobjects/purchase/purchaseOrder');
const ProformaInvoice = require('../pageobjects/purchase/proformaInvoice');
const PurchaseReceive = require('../pageobjects/purchase/purchaseReceive');

describe('InviIMS', () => {
    //open browser
    it('hit url', async () => {
        browser.url(`https://dev-ims.inevitablegroup.in/dashboard/app`)
        await Timeout.timeout()

        browser.maximizeWindow()
        await Timeout.timeout()
    })
    //Signin page
    it('SignIn Page', async () => {
        await Signin.signin()
        await Timeout.timeout()
    })
    //Dashboard Page
    it('Dashboard Page', async () => {
        await Dashboard.dashboard()
        await Timeout.timeout()
    })

    describe('Users & Role Module', () => {
        //Click on Users & Roles tab
        it('Click on  Users & Roles tab', async () => {
            await UserRoleTab.userRolePath()
            await Timeout.timeout()
        })
        //Role tab
        it('Role', async () => {
            await Role.role()
            await Timeout.timeout()
        })
        // //User tab
        it('User', async () => {
            await User.user()
            await Timeout.timeout()
        })
    })

    describe('Resources Module', () => {
        //Click on Resources tab
        it('Click on Resources tab', async () => {
            await ResourcesTab.resourcesPath()
            await Timeout.timeout()
        })
        //Manufacturer tab
        it('Manufacturer', async () => {
            await Manufacturer.manufacturer()
            await Timeout.timeout()
        })
        //Indentor tab
        it('Indentor', async () => {
            await Indentor.indentor()
            await Timeout.timeout()
        })
        //Client tab
        it('Client', async () => {
            await Client.client()
            await Timeout.timeout()
        })
    })

    describe('Settings Module', () => {
        //Click on Settings tab
        it('Click on Settings tab', async () => {
            await SettingsTab.settings()
            await Timeout.timeout()
        })
        //Tax tab
        it('Tax', async () => {
            await Tax.tax()
            await Timeout.timeout()
        })
        //Currency tab tab
        it('Currency', async () => {
            await Currency.currency()
            await Timeout.timeout()
        })
        //Project tab
        it('Project', async () => {
            await Project.project()
            await Timeout.timeout()
        })
        //T&C tab
        it('Terms & Conditions', async () => {
            await TermsAndConditions.termsAndConditions()
            await Timeout.timeout()
        })

    })

    describe('Inventory Module', () => {
        //Click on Inventory tab
        it('Click on Inventory tab', async () => {
            await InventoryTab.inventory()
            await Timeout.timeout()
        })
        //Category tab
        it('Category', async () => {
            await Category.category()
            await Timeout.timeout()
        })
        //Sub Category tab
        it('Sub Category', async () => {
            await SubCategory.subCategory()
            await Timeout.timeout()
        })
        //Component tab
        it('Component', async () => {
            await Component.component()
            await Timeout.timeout()
        })
        //Warehouse tab
        it('Warehouse', async () => {
            await Warehouse.warehouse()
            await Timeout.timeout()
        })
        //Stock tab
        it('Stock', async () => {
            await Stock.stock()
            await Timeout.timeout()
        })
    })

    describe('Purchase Module', () => {
        //Click on Purchase tab
        it('Click on Purchase tab', async () => {
            await PurchaseTab.purchase()
            await Timeout.timeout()
        })
        //Vendor tab
        it('Vendor', async () => {
            await Vendor.vendor()
            await Timeout.timeout()
        })
        //Purchase Request tab
        it('Purchase Request', async () => {
            await PurchaseRequest.purchaseRequest()
            await Timeout.timeout()
        })
        //RFQ tab
        it('RFQ', async () => {
            await RFQ.rfq()
            await Timeout.timeout()
        })
        //Quotation tab
        it('Quotation', async () => {
            await Quotation.quotation()
            await Timeout.timeout()
        })
        //Purchase Order tab
        it('Purchase Order', async () => {
            await PurchaseOrder.purchaseOrder()
            await Timeout.timeout()
        })
        //Proforma Invoice tab
        it('Proforma Invoice', async () => {
            await ProformaInvoice.proformaInvoice()
            await Timeout.timeout()
        })
        //Purchase Receive tab
        it('Purchase Receive', async () => {
            await PurchaseReceive.purchaseReceive()
            await Timeout.timeout()
        })
    })

    describe('Inventory', () => {
        //Click on Inventory tab
        it('Click on Inventory tab', async () => {
            await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[1]').click();
            await Timeout.timeout()
        })
        //IGI tab
        it('IGI', async () => {
            await IGI.igi()
            await Timeout.timeout()
        })
    })

    describe('Profile', () => {
        //Click on Profile menu
        it('Click on Profile menu', async () => {
            await ProfileMenu.profileMenu()
            await Timeout.timeout()
        })
        //Profile tab
        it('Click on Profile option', async () => {
            await Profile.profile()
            await Timeout.timeout()
        })
        //Click on Profile menu
        it('Click on Profile Menu', async () => {
            await ProfileMenu.profileMenu()
            await Timeout.timeout()
        })
        //Click on Logout option
        it('Click on Logout option', async () => {
            await $('/html/body/div[2]/div[3]/li').click();
            await Timeout.timeout()
        })
    })



})