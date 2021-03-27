const express = require('express')
var multer  = require('multer')();
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 8080;

// app.use(express.static('public'));

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/html/index.html')
})

// app.use(bodyParser.json());

app.post('/upload' , multer.single('image'), (req , res) => {
    const fileRecievedFromClient = req.file; 
    //File Object sent in 'photo' field in multipart/form-data
    console.log(req.file)
    // res.send('Hello')
    let form = new FormData();
    form.append('image', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
    // console.log("Form " ,form)
    axios.post('http://127.0.0.1:5000/show', form, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`
            }
        }).then(resp=>{
            console.log(resp.data)
        	res.send(JSON.stringify(resp.data.status))
        })
        .catch((err) => {
            res.send(err)
        })
})



app.listen(PORT,()=>{
    console.log(`app is running on local host ${PORT}`)
})