const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const OpenAI = require('../lib/openai')
const openai = new OpenAI()
const customAuth = require('../lib/authentication');
const config = require('./config.json');
const slack = require('../lib/slack');

router.all('*', customAuth());

router.get('/', async (req, res) => {
  let question = req.query && req.query.q
  let response;

  if (question) {
    let input = decodeURI(question)
    res.locals.question = input;
    res.locals.answer = await openai.ask(input)
  }

  res.render('index')
});

router.post('/', function (req, res) {
  let question = req.session.data['question']
  if (question) {
    res.redirect('/?q=' + encodeURI(question))
  }
});

router.post("/slack/actions", function(req, res, next) {
    let payload = req.body;
    console.log('slack event');

    // handle challenge
    let challenge = payload.challenge;
    if (challenge) {
      console.log('slack challenge');
      res.status(200).send(challenge);
      return;
    }

    // check token (todo: replace with verifying the request signature)
    if (payload.token !== process.env.SLACK_VERIFICATION_TOKEN) {
      console.log('slack token mismatch');
      res.sendStatus(403);
      return;
    }

    // let slack know event received ok
    res.sendStatus(200);

    let slackEvent = payload.event;
    console.log(slackEvent);
    if (slackEvent.type === "app_mention") {
      let msg = slackEvent.text;
      let channel = slackEvent.channel;
      slack(msg);
      return;
    }
});
