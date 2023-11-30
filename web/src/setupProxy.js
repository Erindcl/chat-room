const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:8899",
      changeOrigin: true,
      secure: false,
      onProxyReq: function(proxyReq, req) {
        proxyReq.setHeader("X-Real-IP", req.socket.remoteAddress);
      }
    })
  );
};