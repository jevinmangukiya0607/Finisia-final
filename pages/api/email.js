const SparkPost = require('sparkpost');
const sparky = new SparkPost('ca3c75358e33ca3203771df4405d8316ed8ce016');

sparky.transmissions.send({
    options: {
        sandbox: true
    },
    content: {
        from: 'testing@sparkpostbox.com',
        subject: 'Oh hey!',
        html: '<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
        { address: 'developers+nodejs@sparkpost.com' }
    ]
})
    .then(data => {
        console.log('Woohoo! You just sent your first mailing!');
        console.log(data);
    })
    .catch(err => {
        console.log('Whoops! Something went wrong');
        console.log(err);
    });