const http = require('http')
let counter = 0
const server = http.createServer((req, res) => {
  counter ++
  const path = req.url
  console.info(`Request n°${counter} received on ${path}`)
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify({
    info: `Request n°${counter} received on ${path}`
  }))
})
server.listen(3000)