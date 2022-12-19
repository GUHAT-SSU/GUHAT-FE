const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/auth",
        createProxyMiddleware({
            target: ["http://localhost:8001", "44.198.93.109:8003"],
            changeOrigin: true,
        })
    );
};
