import multer from "multer";
import path from "path";

const storageConfig = multer.diskStorage({
  filename: (req, file, callback) => {
    const name = Date.now() + file.originalname;
    callback(null, name);
  },
  destination: (req, file, callback) => {
    const destination = path.join("src", "uploads");
    callback(null, destination);
  },
});

const fileUpload = multer({ storage: storageConfig });

export default fileUpload;
