# Ziwo outbound call integration POC project

## Documentation reference

In this project, we are studying this part of the Ziwo API documention : https://ziwo-poc-api.aswat.co/docs/#click-to-call

## What you need before starting (requirements)

- your Ziwo instance name : if your instance is rait-test.aswat.co (the url where you connect to as a user or agent), your instance name is `rait-test`
- the api key of your instance : this can be asked to Ziwo support team. api_key and access_token are two different ways of authenticating to Ziwo. access_token is generated with user/password whereas api_key is more like a secret key. api_key is required for some CTI integrations between Ziwo and other services (like the one we are building). For many other purposes, we need an access token that is generated with appropriate logins. Details are available here : https://ziwo-poc-api.aswat.co/docs/#auth
- npm and node in recent version

## Get started with this project

- git clone
- npm install
- copy conf.json.example file to conf.json and replace with the appropriate values
- then just type, for instance

  npm run start -- 3434 0033622222222

To dial 0033622222222 (the number should contain prefix 00 and country prefix) for agent having ccLogin 3434

The agent rings and once it takes the call, the customer is called

For an integration with another tool like SAP CRM, Sugar CRM or anything else, the only thing to remember is that you have to do a POST (HTTP method) call with api key to the right API endpoint and with the correct agent ccLogin/customer phone number (with country prefix and 00). Whatever might be the language, it would work the same.
