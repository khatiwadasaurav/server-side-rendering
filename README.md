run yarn dev to start the server and run the program
run yarn pm2 logs to see the logs
run yarn webpack to see if there are any error or not ,in the scripts tag in the package.json the wd flag is for watch in development mode remove the watch flag to rest the time required for webpack to generate a bundle to do that run "time yarn webpack"

we need polyfills to handle the async await in the application so we modified the entry in the webpack.config.js and added babel-polyfill followed by yarn add

mac os commands:
to kill port : sudo lsof -i -P | grep 3000
kill pid

git grep "fileName" to see actually where the file was used previously in the vcs

# server-side-rendering

Creating a server side rendering demo for references on how to render pages server side using react , express and testing using jest.
using Babel to make life easier :D
