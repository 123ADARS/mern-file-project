import multer from 'multer';

const upload = multer({ dest: 'uploads' })


export default upload;

// import multer from 'multer';

// // Configure multer with specific options
// const storage = multer.diskStorage({
//   destination: 'uploads/', // Define where to store uploaded files
//   filename: (req, file, cb) => {
//     // Define how to name the uploaded files
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage }); // Pass the storage configuration to multer

// export default upload;
