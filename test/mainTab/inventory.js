class Inventory {
    async inventory() {
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[1]').click();

    }
}
module.exports = new Inventory();