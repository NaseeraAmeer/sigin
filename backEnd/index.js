const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());




app.post("/login",(req,res)=>{
    console.log({body:req.body});
    res.send({
        mes:"Login sucess"
    });
});
app.listen(PORT,()=> {
    console.log(`server is runing at port ${PORT}`)
});