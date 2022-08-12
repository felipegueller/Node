const express = require('express')
const app = express()

app.get('/upload-image', async (req, res) => {
  return res.status(400).json({
    error: true,
    message: 'The upload had an error!'
  })

  // return res.json({
  //   error: false,
  //   message: 'Upload was realized with sucess!'
  // })
})

app.listen(3030, () => console.log('The server is running on port 3030'))
