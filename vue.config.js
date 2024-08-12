const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: {
      type: 'https',
    },
    port: 8080, // Use the port you want
    client: {
      webSocketURL: 'wss://silver-space-capybara-4rxrj6rq6gj2qrrp-8080.app.github.dev/ws', // Use wss for WebSocket Secure
    },
  },
  pwa: {
    name: "My PWA",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://my-api-domain/"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300,
            },
          },
        },
      ],
    },
  },
});
