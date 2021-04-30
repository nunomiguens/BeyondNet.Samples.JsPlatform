const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const html = `
      <html>
        <head>
          <title>My Form</title>
        </head>
        <body>
          <form action="/create-user" method="POST">
            <div>
              <p>Please, enter your user name:</p>
              <input type="text" name="create-user"/>
              <button type="submit">Send</button>
            </div>
          </form>
        </body>
      </html>
    `;
    res.write(html);
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(message);
      return res.end();
    });

    res.end();
  }

  if (url === "/users") {
    const html = `
    <html>
      <head>
        <title>My User List</title>
      </head>
      <body>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
      </ul>
      </body>
    </html>`;

    res.write(html);
    return res.end();
  }

  console.log(url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Sample</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
