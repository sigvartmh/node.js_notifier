Installation and setup
----------------
Technology used:
  * [Node.js](http://nodejs.org/) (Javascript server running on [V8 engine](https://code.google.com/p/v8/))
  * [Websockets](http://en.wikipedia.org/wiki/WebSocket) (By using [socket.io](http://socket.io/) on the node.js server)
  * [jQuery](http://jquery.com/) (For DOM manipulation with ajax post/request)

Requirements:

  * Node.js http://nodejs.org/download/

Node requirements:

  * Node-notifier https://www.npmjs.org/package/node-notifier
  * Socket.io https://www.npmjs.org/package/socket.io
    
Download and install node or download source as shown:
  
LINUX/UNIX/OSX:

    curl -O http://nodejs.org/dist/v0.10.32/node-v0.10.32-darwin-x64.tar.gz
    tar -xzvf node-v0.10.32-darwin-x64.tar.gz
    cd node-v0.10.32-darwin-x64/
    git clone https://github.com/sigvartmh/node.js_notifier.git
    
Installing NPM:
    
    npm install node-notifier
    npm install socket.io
    
Note: Socket.io requires a C++ compiler due to a C/C++ addon. Read more about the [node-gyp](https://github.com/TooTallNate/node-gyp) if you have problems with installing socket.io or google it.

To run example:
    
    bin/node notify.js
    bin/node <your_path>/notify.js

and go to:

    http://localhost:8080
