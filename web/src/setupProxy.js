const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://172.18.106.56:7001/proxy/11",
      changeOrigin: true,
      secure: false,
      onProxyReq: function(proxyReq, req) {
        proxyReq.setHeader("X-Real-IP", req.socket.remoteAddress);
      }
    })
  );
};