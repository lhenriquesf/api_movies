require("express-async-errors");

const AppError = require("./utils/AppError");

const migatrionsRun = require("./database/sqlite/migrations");

const express = require("express");
const app = express();
migatrionsRun();

app.use(express.json());

const routes = require("./routes");
app.use(routes);

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

const PORT = 6000;
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`));