const express = require("express");
const mongoose = require("mongoose");
require("./userSchema/user");
const USER = mongoose.model("USER");
const cors = require("cors");
const path = require("path")

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3003;

app.get("/getalldata", (req, res) => {
  USER.find()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(422).json({ error: err });
    });
});

mongoose
  .connect(
    "mongodb+srv://rajsri4485:9de2c8ljEjKsVitT@dashbordcluster.2kmlh8p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected mongodb");
  })
  .catch((err) => {
    console.log(err);
  });


  app.use(express.static(path.join(__dirname, "./Frontend/build")));

  app.get("*",(req,res)=>{
    res.sendFile(
      path.join(__dirname,"./Frontend/build/index.html"),
      function (err){
        res.status(500).send(err)
      }
    )
  })

app.listen(PORT, () => {
  console.log("server running at port", PORT);
});
