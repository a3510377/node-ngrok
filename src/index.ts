import ngrok, { Ngrok } from "ngrok";

(async () => {
  const { HOST, PORT, AUTH_TOKEN, REGION, PROTO } = process.env;
  const url = await ngrok.connect({
    authtoken: AUTH_TOKEN,
    addr: parseInt(PORT || "") || HOST,
    proto: <Ngrok.Protocol | undefined>PROTO,
    region: <Ngrok.Region | undefined>REGION,
  });

  console.log(url);
})();
