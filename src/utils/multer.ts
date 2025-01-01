import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

// Define the storage engine as memoryStorage
const storage = multer.memoryStorage();


// Define the file filter function
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadWithMulter = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default uploadWithMulter;