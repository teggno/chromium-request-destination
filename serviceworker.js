self.addEventListener("fetch", async ({ request, clientId }) => {
  if (request.destination === "image" || request.destination === "style") {
    //favicon, styles.css ignore
    return;
  }
  console.log("request.destination:", request.destination);

  const client = await clients.get(clientId);
  if (!client) return;

  client.postMessage({
    msg: `request.destination: ${request.destination}`,
  });
});
