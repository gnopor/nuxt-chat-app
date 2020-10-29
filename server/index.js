const { app, server } = require("./app");

const port = process.env.PORT || 5000;

async function start() {
  // Listen the server
  server.listen(port, () => {
    console.log("Server listening on `localhost:" + port + "`.");
  });
}

start();
