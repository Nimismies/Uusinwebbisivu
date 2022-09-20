/*const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();
const multer = require("multer")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))




router.post("/upload", (req, res) =>{
        console.log(req.file)

        if (!req.file) {
            res.send({ code: 500, msg: "Error"})
        } else {
            res.send({ code: 200, msg: "Upload success"})
        }

})








module.exports = router;*/