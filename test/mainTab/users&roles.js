class UserRolePath {
    async userRolePath() {
        await $('/html/body/div/div/div/nav/div/div/div/div/div[1]/div[2]/div/div/div/div[2]/ul/div[3]').click();

    }
}
module.exports = new UserRolePath();