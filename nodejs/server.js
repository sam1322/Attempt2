const express = require('express')
var multer  = require('multer');
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const path = require('path')
const app = express();
const PORT = 8080|| process.env.PORT 
const stream = require('stream');
const { createWorker } = require('tesseract.js')
const worker = createWorker({
    logger: m => console.log(m)
  });
  
  let Data=""  
// const upload = multer({storage:storage}).single('avatar')
// const upload = multer({dest:'./uploads/'})
const upload = multer()

app.use('/static',express.static('public'));
  
// app.use('/', express.static(path.resolve(__dirname , 'public') ) ) ;

// app.use('/',function(req,res,next){
//     console.log(req.url)
//     next()
// })


app.get('/',(req,res)=>{
    // res.sendFile(__dirname + '/public/html/index.html')
    res.sendFile(path.join(__dirname,'public'  ,'index.html'))
})
app.get('/aboutus',(req,res)=>{
    // res.sendFile(__dirname + '/public/html/index.html')
    res.sendFile(path.join(__dirname,'public'  ,'index.html'))
})
app.get('/contactus',(req,res)=>{
    // res.sendFile(__dirname + '/public/html/index.html')
    res.sendFile(path.join(__dirname,'public'  ,'index.html'))
})

app.post('/upload' , upload.single('image'), async (req , res) => {
    // const fileRecievedFromClient = req.file; 
    // //File Object sent in 'photo' field in multipart/form-data
    // console.log(req.file)
    // // res.send('Hello')
    // let form = new FormData();
    // form.append('image', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
    // // console.log("Form " ,form)
    // axios.post('http://127.0.0.1:5000/show', form, {
    //         headers: {
    //             'Content-Type': `multipart/form-data; boundary=${form._boundary}`
    //         }
    //     }).then(resp=>{
    //         console.log(resp.data)
    //         res.send(JSON.stringify(resp.data.status))
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //     })

    try{
		console.log(req.file) 

	  await worker.load();
	  await worker.loadLanguage('eng');
	  await worker.initialize('eng');
	  const data = await worker.recognize(req.file.buffer  );
	  console.log(data.data);

      const Pdf = await worker.getPDF('Tesseract OCR Result');
      Data = Pdf.data 
    //   console.log(Data)
	  console.log('Generate PDF: tesseract-ocr-result.pdf');

	  // await worker.terminate();
	  res.send(data) 
		//   res.redirect("/download")

	}
	catch(e){
		res.send(`An error ${e.message} occured`)
	}
 
})


app.get('/download', function(request, response){
 
    const fileContents = Buffer.from( Data);
    console.log(Data)
    const readStream = new stream.PassThrough();
    readStream.end(fileContents);
  
    response.set('Content-disposition', 'attachment; filename=' + "hello.pdf");
    response.set('Content-Type', 'application/pdf');
  
    readStream.pipe(response);
    // Data = ""
  });

app.listen(PORT,()=>{
    console.log(`app is running on local host ${PORT}`)
})