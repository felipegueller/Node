const multer = require('multer')

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload/users')
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now().toString()}_${file.originalname}`)
    }
  }),
  fileFilter: (req, file, cb) => {
    const typesAllow = ['image/png', 'image/jpg', 'image/jpeg']
    const typeValid = typesAllow.find(typeAllow => typeAllow === file.mimetype)

    return typeValid ? cb(null, true) : cb(null, false)
  }
})
