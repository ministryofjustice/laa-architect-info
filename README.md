# Prototype LAA architecture chat
LAA architecture documentation. Includes:
- a Q&A demo that uses the Open AI API
- documentation pages

# Install
To install the app:
- Download or clone the repository
- Run `npm install` in the project folder to install all modules and their dependencies

# Local usage

### Set API key

You will need to set an Open AI API key for the service to use.
- Create an [API Key](https://platform.openai.com/docs/quickstart/add-your-api-key) if you don't already have one
- Set the key as `OPENAI_API_KEY` environment variable

### Run the app

To start the app:
- Run `npm start` in the project folder to start the app
- Visit http://localhost:3000
- Submit a question and get a response.
- Visit http://localhost:3000/docs to view docs.

### Training data

When a Q&A question is submitted, the data in `/docs` is used as a prompt to help the language model in providing an answer. This allows the model to have LAA Digital contextual awareness and not just general knowledge when responding.

Important: if you want to update the training data, please note that this repository is public so don't add any sensitive or personal details!

To add or update content:
- Either create a new markdown file in `/docs` or update an existing file
- Use a meaningful name for the file and save as `.md`
- The content should be in the format of questions and answers:
  - Each question should be prefixed with '###' and end with a '?'
  - Each answer should follow the question and not contain either '###' or '?' characters

Once you have added or updated the content, you will need to generate 'embedding' vectors that represent the semantic meaning of the content.
- Run `npm run prepare-embeddings` in the project folder to start the app
- This will generate embeddings for each of the content files and save them to `embeddings.json`. The script may take a few minutes to complete, since we need to respect rate limits with the Open AI API. A `questions.json` file will also be created to map the embedding vectors to their original questions.

When you next enter a question, the embeddings file will be searched for semantically similar content to the question. The most similar snippets will be sent to the Open AI language model as a contextual prompt together with the question.

### Test fine-tuning a model

If you like, you can also play with fine-tuning a chatGPT model based on the training data provided. If you do, please read the [Open AI fine-tuning documentation](https://platform.openai.com/docs/guides/fine-tuning) first, and expect the unexpected with results!

You will need Python 3 installed. You will then need to install the openai cli tool.
- Run `pip install --upgrade openai`

Prepare training data (using the content in `/docs`):
- Run `npm run prepare-tuning` in the project folder to create a file for GPT-3 tuning
- Run `openai tools fine_tunes.prepare_data -f tuning_data.jsonl` in the project folder to analyse and format the tuning file

Train model:
- Run `openai api fine_tunes.create -t tuning_data_prepared.jsonl -m davinci --suffix "laa-architects"`
- Copy the model name returned by the above command
- ...wait for the training to complete (it might be in a queue)

Test model:
- Run `openai api completions.create -m <MODEL_NAME> -p <YOUR_PROMPT> --stop=[" END"]`

Update app to use the new model:
- Set 'model' to the name of the new model in `config.js`

### Slack integration

The app provides handling for a Slack response bot.
- Create a Slack APP in your workspace, with events set to post to [URL-to-your-site]/slack/actions
- Set the Bot User OAuth Token as `SLACK_API_KEY` environment variable
- Set the Verification Token as `SLACK_VERIFICATION_KEY` environment variable
