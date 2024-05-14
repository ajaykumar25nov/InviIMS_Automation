class ProfileMenu {
    async profileMenu() {
        await $('/html/body/div/div/header/div/div/div/button/div/img').click();

    }
}
module.exports = new ProfileMenu();