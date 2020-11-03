const { response } = require('express');
const express = require('express');
import DiscoveryV1 from 'ibm-watson/discovery/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const app = express()

app.get('/', (req, res) => {
    // const data = await processData();
    res.send('Foo');
});

let connect = () => {
    const discoveryClient = new DiscoveryV1({
        authenticator: new IamAuthenticator({ apikey: '{apikey}' }),
        version: '{version}',
    });
}

module.exports = app;