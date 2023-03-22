const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const OpenAI = require('../lib/openai')
const openai = new OpenAI()
const customAuth = require('../lib/authentication');
const config = require('./config.json');
const slack = require('../lib/slack');
const fs = require('fs');
const path = require('path');
const mdConverter = require('markdown-it')();
let docPages = {};
(async () => {
  docPages = await require('../lib/doc-pages')()
})();

router.all('*', customAuth());

router.get('/', async (req, res) => {
  let question = req.query && req.query.q
  let response;

  if (question) {
    let input = decodeURI(question)
    res.locals.question = input;
    res.locals.answer = await openai.ask(input)
  }

  res.render('index', { qa: true })
});

router.post('/', function (req, res) {
  let question = req.session.data['question']
  if (question) {
    res.redirect('/?q=' + encodeURI(question))
  }
});

router.get('/docs/:item', function (req, res) {
  let item = req.params && req.params.item;
  if (docPages[item]) {
    res.render('docs-content', { contentBlocks: docPages[item] });
  } else {
    res.render('docs');
  }
})

router.post("/slack/actions", async function(req, res, next) {
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
    if (slackEvent.type === "app_mention") {
      let msg = slackEvent.text;
      // remove bot user ref
      msg.replace(/<.*>/, '');
      msg = await openai.ask(msg);
      msg.replace('<br>', '\n');
      let channel = slackEvent.channel;
      slack(msg, channel);
      return;
    }
});
