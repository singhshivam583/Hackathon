import multer from 'multer';

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Set upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Set filename
    }
});

const upload = multer({ storage: storage });

export default upload;