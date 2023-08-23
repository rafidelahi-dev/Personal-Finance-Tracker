//npm install init
//npm init -y
//npm install express nodemon
//npm run start
const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000
const prisma = new PrismaClient()

app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})