const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

let arr = []
const port = 8000;

app.get("/",(req,res)=> {
    res.send("HELLO WORLD:");
});

app.post("/",(req,res)=> {
    const {name} = req.body;

    arr.push(name);
    res.send("HELLO WORLD:" + name);
});

app.listen(port, () => {
    console.log("SERVER UP AT PORT: " + port);
})
