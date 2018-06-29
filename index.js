const { apiKey, ziwoInstanceName } = require("./conf");
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(
    "Missing arguments : first argument should be the agent ccLogin and second argument should be the number to dial"
  );
  process.exit();
}

const [agentCcLogin, numberToDial] = args;

const rp = require("request-promise-native");

(async () => {
  const urlToPost = `https://${ziwoInstanceName}-api.aswat.co/integrations/cti/agents/${agentCcLogin}/call/${numberToDial}?api_key=${apiKey}`;
  console.log("About to post url", urlToPost);
  let res = await rp.post(urlToPost);
  //here we get a call id
  console.log("Call id information", res);
})();
