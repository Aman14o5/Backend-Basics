import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const absolutePath = path.resolve(localFilePath);
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response);
        if (fs.existsSync(absolutePath)) {
            fs.unlinkSync(absolutePath);
        }
        return response;
    } catch (error) {
        console.error("Cloudinary upload failed:", error.message);

        if (localFilePath) {
            const absolutePath = path.resolve(localFilePath);
            if (fs.existsSync(absolutePath)) {
                fs.unlinkSync(absolutePath);
            }
        }
        return null;
    }
}

export { uploadOnCloudinary }