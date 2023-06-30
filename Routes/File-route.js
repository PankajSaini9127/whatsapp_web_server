import express from "express";
import upload from "../Middleware/Upload.js";
import { uploadFile } from "../Controller/FileUpload-controlles.js";

const Router = express.Router();

Router.post('/upload',upload.single('file'),uploadFile)


export default Router;