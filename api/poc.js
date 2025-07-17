export default function handler(req, res) {
  // 强制覆盖所有可能被代理修改的头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/javascript");
  res.setHeader("X-Content-Type-Options", "nosniff"); // 防MIME类型嗅探攻击

  // 阻止代理缓存敏感响应
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  res.status(200).send("alert(/xss_poc/);");
}
