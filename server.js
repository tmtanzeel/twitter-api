const express = require('express');
const Twitter = require('twit');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// replace 3000 with (process.env.PORT) when deploying on a server
app.listen((process.env.PORT), () => console.log('Server running'));
app.use(bodyParser.json());
app.use(cors());

const api_client = new Twitter({
    consumer_key: '5KvPZUZ83y8uPDJypf1zLAplc',
    consumer_secret: 'm1sfnBIv50gnIOn8addb1MzBmUyi1Ml9MeAFfhPVAet1WMha6Z',
    access_token: '1219680138939359232-0Tgj5k3KjQZnvbBy7roAPKBpk0eNJB',
    access_token_secret: 'Wc57BqdPSqhJWqABpv2j57wYLN1pjIkrDJUNVdLnoWJmx'
})

app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
    api_client
        .get('statuses/home_timeline', params)
        .then(timeline => {
            res.send(timeline);
        })
        .catch(error => {
            res.send(error);
        });
});