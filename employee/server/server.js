const express=require('express');
const dotenv=require('dotenv');
const conn=require('./db/config.js');
const authRouter=require('./router/authRouter.js')
const userRouter=require('./router/userRoutes.js')
const cors=require('cors');
dotenv.config();

const app = express();
app.use(cors({orgin:'http://localhost:3000'}))
app.use(express.json());
app.use(authRouter);
app.use(userRouter);

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started");
    });
})
.catch(error => {
    console.log(error);
})