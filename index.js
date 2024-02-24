import express, { json, response } from "express";
import cors from "cors";
import connectDb from "./config/dbConnection.js";
import adminRoute from "./routes/adminRoute.js";
import agencyRoute from "./routes/agencyRoute.js";
import guideRoute from "./routes/guideRoute.js";
import packageRoute from "./routes/packageRoute.js"
import hotelRoute from "./routes/hotelRoute.js"
import messageRoute from "./routes/messageRoute.js"
import dotenv from "dotenv";


const app = express();
const port=5000;
connectDb();
dotenv.config();
app.use(cors())
app.use(express.json());



app.use("/api/admin", adminRoute);
app.use("/api/agency",agencyRoute);
app.use("/api/guide",guideRoute);
app.use("/api/package",packageRoute);
app.use("/api/hotel",hotelRoute);
app.use("/api/message",messageRoute);




app.listen(port,()=>{
    console.log(`server is running on port ${port}}`);
})
                