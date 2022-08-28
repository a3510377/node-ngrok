import ngrok, { Ngrok } from "ngrok";
import { createServer } from "http";

(async () => {
  const { HOST, PORT, AUTH_TOKEN, REGION, PROTO } = process.env;
  const url = await ngrok.connect({
    authtoken: AUTH_TOKEN,
    addr: parseInt(PORT || "") || HOST,
    proto: <Ngrok.Protocol | undefined>PROTO,
    region: <Ngrok.Region | undefined>REGION,
    onLogEvent: console.info,
  });

  createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      res
        .writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        .end(url);
    }
  }).listen(1333, () => console.log("listening on port 1333"));

  console.log(url);
})();
