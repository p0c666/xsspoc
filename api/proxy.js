export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/javascript");
  res.status(200).send("alert(/poc/);");
}
