module.exports = {
  port: process.env.PORT || 8080,
  host: process.env.HOST || "localhost",
};

//also we will be using another library known as pm2 as we don't want to restart the server everytime we do some changes pm2 will manage it . also add it to the scripts section in the package.json

//also for running yarn dev as i have placed the key as dev in the scripts in package.json

//also for logs we use yarn pm2 logs simple as that  || pm2 logs [ all | OUT | ERR | app_name | app_id] [--lines <n>] [--raw] [--timestamp [format]].
