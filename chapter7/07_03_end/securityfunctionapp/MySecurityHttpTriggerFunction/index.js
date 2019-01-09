const https = require('https');
const querystring = require('querystring');

module.exports = async function (context, req) {

    const body = req.body;
    return new Promise((resolve, reject) => {

        if (body) {

            const clientSecret = 'c62c3787c285f9a49b4632213cb62f0f';

            const options = {
                host: 'graph.facebook.com',
                port: 443,
                path: '/v3.1/oauth/access_token',
                method: 'POST'
            };

            const paramsObj = querystring.parse(body);
            paramsObj.client_secret = clientSecret;
            const postData = querystring.stringify(paramsObj);

            let result = null;

            const req = https.request(options, (res) => {
                res.on('data', (chunk) => {
                    result = chunk;
                });
                res.on('end', () => {
                    context.res = {
                        status: 200,
                        body: result
                    };
                    resolve();
                });
            });

            req.write(postData);
            req.end();

        } else {
            context.res = {
                status: 400,
                body: "Please pass a request body"
            };
            resolve();
        }

    });
};
