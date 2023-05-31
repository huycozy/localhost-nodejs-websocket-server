// Importing the required modules
const WebSocketServer = require('ws');
 
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })
 
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("A new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
        // send back
        console.log("Throwing back: " + data.toString());
        ws.send(data.toString());
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("Client has disconnected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 8080");