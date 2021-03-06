const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

app.get('/', verificationController);
app.post('/', messageWebhookController);



app.listen(5000, () => {
  console.log(`Webhook server is listening, port ${PORT}`)
})
