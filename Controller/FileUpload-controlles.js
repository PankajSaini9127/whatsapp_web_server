import dotenv from 'dotenv';

dotenv.config();


export async function uploadFile(req,res){
    try{
      return res.send(process.env.Image_Link_Url+req.file.path)
    }catch(error){
        console.log("error while calling uploadfile API",error);
        return res.status(500).send(error);
    }
}