class Settings {
    async settings() {
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[6]').click();

    }
}
module.exports = new Settings();