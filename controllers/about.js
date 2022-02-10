const { ServerResponse, IncomingMessage } = require("http");

module.exports = {
    /**
     * 
     * @param {IncomingMessage} req 
     * @param {ServerResponse} res 
     */
    about(req, res) {
        res.render('about');
    }
}