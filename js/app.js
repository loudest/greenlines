var connect = require('connect');

connect()
  .use(connect.static('.'))
  .listen(8080);

console.log('Listening on port 8080.');

