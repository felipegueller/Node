const express = require('express')
const app = express()
const uploadUser = require('../middlewares/upload-images')

app.get('/upload-image', uploadUser.single('image') , async (req, res) => {
  if (req.file) {
    console.log('imagem: ', req.file)
    return res.json({
      error: false,
      message: 'Upload was realized with sucess!'
    })
  }

  return res.status(400).json({
    error: true,
    message: 'The upload had an error!'
  })
})

app.listen(3030, () => console.log('The server is running on port 3030'))
