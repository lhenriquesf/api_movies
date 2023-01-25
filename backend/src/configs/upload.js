const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FORLDER = path.resolve(TMP_FOLDER, "uploads");


const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callbak){
            const fileHash = crypto.randomBytes(10).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;

            return callbak(null, fileName);
        }
    })
}

module.exports = {
    TMP_FOLDER,
    UPLOADS_FORLDER,
    MULTER
}
