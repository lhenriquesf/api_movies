require("express-async-errors");

const uploadConfig = require("./configs/upload");

const AppError = require("./utils/AppError");
const cors = require("cors");

const migrationsRun = require("./database/sqlite/migrations");

const routes = require("./routes");


const express = require("express");
const app = express();
migrationsRun();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));


app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})

const PORT = 8181;
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`));