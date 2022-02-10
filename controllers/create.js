const { ServerResponse, IncomingMessage } = require("http");

module.exports = {
    /**
     * 
     * @param {IncomingMessage} req 
     * @param {ServerResponse} res 
     */
    create(req, res) {
        res.render('create');
    }
}