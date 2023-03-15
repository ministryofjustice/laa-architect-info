const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const OpenAI = require('../lib/openai')
const openai = new OpenAI()

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
    // Get event payload
    let payload = req.body;
    let challenge = payload.challenge;
    res.status(200).send(challenge);
});
