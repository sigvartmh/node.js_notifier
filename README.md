Installation and setup
----------------
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
    
Installing NPM:
    
    npm install node-notifier
    npm install socket.io
    
Note: Socket.io requires a C-compiler

To run example:
    
    bin/node notify.js

and go to:

    http://localhost:8080
