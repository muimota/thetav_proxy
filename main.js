const http = require('http')
const server = http.createServer()


console.log("\nRICOH theta Y camera proxy\n2019 @muimota")

server.on('request', (_req,_res) =>
  {
    const data = '{"name": "camera.getLivePreview"}'

    const options = {
      hostname: '192.168.1.1',
      port: 80,
      path: '/osc/commands/execute',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = http.request(options, (res) => {
      _res.headers = res.headers
      res.on('data', (d) => {
        _res.write(d)
      })
    })

    req.on('error', (error) => {
      console.log('Error connecting ricoh camera')
      _res.end('Error connecting ricoh camera')
    })

    req.write(data)
    req.end()

  }
)
server.listen(8000)
