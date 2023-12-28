import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

//security packages
import helmet from "helmet";
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";

const __dirname = path.resolve(path.dirname(""));

dotenv.config();

const app = express();

const corsOptions = {
    origin : "https://fianex-final-frontend.onrender.com",
    optionsSuccessStatus : 200
}

app.get('/profile/:id?', cors(corsOptions), function(req,res,next){
    res.json({msg:'This is CORS-enabled'})
})

app.listen(PORT,function(){
    console.log('CORS-enabled web server listening on port 80');
})


app.use(express.static(path.join(__dirname, "views/build")));

const PORT = process.env.PORT || 8000;

dbConnection();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));

app.use(morgan("dev"));
app.use(router)

//error middleware
app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
