const FACEBOOK_ACCESS_TOKEN = 'EAAB0KJzHHZAMBAL24LMtBhs1HovKEeAd3BhW2TMuEKI6WJPyBYZC3R1wbCZApvfxxifFX3w8vtZB9ibMDiHgrSk6hVAGpNMilLWf2SNQ8QZCEkDsuD6KAZA1wqaeq3HoYsz98ycvZAsPNCy4FZAa5OuwvDusZADgAZB4JIOD6rGVD5RgZDZD';
const CAT_IMAGE_URL = 'https://botcube.co/public/blog/apiai-tutorial-bot/hosico_cat.jpg';

const request = require('request');

module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;

    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: {
                attachment: {
                    type: 'image',
                    payload: { url: CAT_IMAGE_URL}
                }
            }
        }
    });
};
