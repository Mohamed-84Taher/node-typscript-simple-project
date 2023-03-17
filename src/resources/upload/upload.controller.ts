import { BadRequestException } from "../../utils/exceptions";
import express, { NextFunction, Request, Router } from "express";
import { upload } from "../../middleware/upload";

const router: Router = express.Router();

router.post("/upload", upload.single("myImage"), (req, res) => {
  if (!req.file) {
    throw new BadRequestException("Image is required!");
  }
  res.status(200).json({ msg: "Image added with success" });
});

export default router;
