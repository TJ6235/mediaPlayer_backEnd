// 1) import json server

const jsonServer = require('json-server')

// 2) create json server - create()

const mediaPlayerServer = jsonServer.create()

// 3) create path for json file(data) - using router() method

const router = jsonServer.router("db.json")

// 4) create middleware to parse json

const middleWare = jsonServer.defaults()

// 5) allow server to use middleware and router

mediaPlayerServer.use(middleWare)
mediaPlayerServer.use(router)

// 6)set up port for the server to run

PORT = 3002 || process.env.PORT

// 7) listen to the request

mediaPlayerServer.listen(PORT,()=>console.log(`server running successfully at port ${PORT}`))