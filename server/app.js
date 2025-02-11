import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";

dotenv.config();  


const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Routes
// app.get("/", (req, res) => {
//     res.json({name:"polo",age:90}); 
// });
app.use("/api/auth",authRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});