const getPing = async (request, response) => {
    response.status(200);
    response.send({
        success: true,
        message: 'pong',
        body: request.body,
        query: request.query,
        ip: request.ip,
        hostname: request.hostname
    })
}

module.exports = {
    getPing
}