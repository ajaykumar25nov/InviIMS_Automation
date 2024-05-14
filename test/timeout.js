class Timeout {
    async timeout() {
        await new Promise(r => setTimeout(r, 500));
    }
}
module.exports = new Timeout();