const http = require('node:http');

// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 3000;
let counter = 0;

const server = http.createServer((req, res) => {
  counter++;
  // console.log("Heyyyy I received my first request EVER!");
  switch (req.url) {
    case '/get-data':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(`
        {
          "name":"Ahmad",
          "age":${counter}
        }
      `);
      break;

    case '/': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <h1>Hello World</h1>
          <h2>${counter}</h2>
        </body>
        </html>
    `);
      break;
    }
    case '/about': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>          
          <h1>About Page</h1>
          <h2>${counter}</h2>
        </body>
        </html>
    `);
      break;
    }
    default: {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>          
          <h1>Page Not Found</h1>
          <h2>404</h2>
        </body>
        </html>
    `);
      break;
    }
      break;
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 