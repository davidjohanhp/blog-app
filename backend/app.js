import express from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes";
// import ro

const app = express();
app.use(express.json());
app.use("/api/user", router) 

mongoose
.connect(
    "mongodb+srv://admin:admin@cluster0.xfustlo.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }
)
.then(() => app.listen(3000))
.then(() => 
    console.log ("Connected to database and listening to localhost 3000")
    )
.catch((err) => console.log(err));
// app.use("/api", (req, res, next) => {
//     res.send("Hello World")
// })

// app.listen(3000);

//9umQxNQOle9reGTF