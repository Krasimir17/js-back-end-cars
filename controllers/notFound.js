const { ServerResponse, IncomingMessage } = require("http");

module.exports = {
    /**
     * 
     * @param {IncomingMessage} req 
     * @param {ServerResponse} res 
     */
    notFound(req, res) {
        res.render('404');
    }
}