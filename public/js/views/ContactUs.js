import AbstractView from './AbstractView.js'

export default class extends AbstractView{
	constructor(){
		super()
		this.setTitle('Contact Us')
	}
	async renderHTML(){
		return `	
			<center>	
				 <div class="row m-3">
    <div class="col-md-6 col-sm-12" style="margin: 15px">
    <h1 class="get">Get In Touch</h1>
    <p style="font-size: 1.5em;">Please fill out the below form</p>
    <div class="contact">
      <form id = "contactform" >

          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" required>
          </div>

          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="EmailID" name="Email" placeholder="name@email.com" required>
          </div>

          <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="Message" rows="3" name="Message" placeholder="Type your message here"></textarea>
          </div>
          <input type="submit" class="btn btn-success" value="Submit"> 
      </form>
    </div>
  </div>
  <div class="col-md-5 col-sm-auto text-center">
    <h3 style="font-family: 'Playfair Display', serif; ">For more contact details </h3>
    <p>Reach us through <a href="#" style="text-decoration: none;">abc@email.com</a></p>
    <p>Github link for this website is : <a href="https://github.com/sam1322/project1" target="_blank" rel="noopener noreferrer">Github</a></p>
  </div>
 </div>
			 </center>				 
			`
	}	
}