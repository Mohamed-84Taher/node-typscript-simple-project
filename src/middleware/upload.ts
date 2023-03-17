import multer, { diskStorage, FileFilterCallback } from "multer";
import { extname } from "path";

const storage = diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    const filePath = `${file.fieldname}-${Date.now()}${extname(
      file.originalname
    )}`;
    cb(null, filePath);
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb: FileFilterCallback) => {
    if (file.mimetype.includes("image")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
