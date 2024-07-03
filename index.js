const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const userData =[

//    { userName : "Naseera",
//     password : "naseameer",
//    }


]

// app.get ("/users", (req,res)=>{
//     console.log(req,body);

//     res.send(
//         helloword
      
//     );
// });

app.post("/login",(req,res)=>{
    console.log({body:req.body});
    res.send({
        mes:"Login sucess"
    });
});
app.listen(PORT,()=> {
    console.log(`server is runing at port ${PORT}`)
});