import multer from 'multer';

import path from 'path';

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        let name = path.extname(file.originalname);
        cb(null,Date.now()+name)
    }
});

const upload = multer({
    storage:storage,
    // fileFilter:function(req,file,cb){
    //     if(
    //         file.mimetype == 'image/png' ||
    //         file.mimetype == 'image/jpg' ||
    //         file.mimetype == 'image/jpeg' 
    //     ){
    //         cb(null, true)
    //     }else{
    //         console.log("file type not valid")
    //         cb(null ,false)
    //     }
    // },
    limits: 1024 *1024 * 4
});


export default upload;