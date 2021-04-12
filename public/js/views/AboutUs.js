import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(){
		super()
		this.setTitle('About Us')
	}
	async renderHTML(){
		return ` 	 
				<section>
				  <h1 style="text-align: center;">About Us</h1>
				 <a name="aboutus"></a>
				 <br>
				    <div class="container text-center">
				      <div><img class="imagedp" src="/static/unknown.png" alt="sudanshu">
				        <br><strong>Sudanshu</strong>
				        <p>His main contribution is in machine learning part of this project </p>
				      </div>
				      <div><img class="imagedp" src="/static/sriram.jpg" alt="sriram" width=50% >
				        <br><strong>Sriram</strong>
				        <p>His main contribution is in web development part of this project </p>

				      </div>
				      <div><img class="imagedp" src="/static/unknown.png" alt="aman">
				        <br><strong>Aman</strong>
				        <p>His main contribution is in machine learning part of this project </p>

				      </div>
				    </div>
				  </div>
				</section>
			 				 
			`

	}
}