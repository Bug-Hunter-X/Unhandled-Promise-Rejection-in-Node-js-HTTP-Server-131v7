const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOp = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Async operation failed!'));
        }
      }, 1000);
    });
  };

  asyncOp()
    .then(result => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch(err => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      console.error('Error:', err); //Still log the error for debugging purposes
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});