import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(){
		super()
		this.setTitle('TexT ReCognition')
	}
	async renderHTML(){
		return `<form  action ="#">
		<div style="text-align:center;margin: 3px">
		<label for="image">Select an image for extracting text </label>
		</div>
		<br>
    	<div style="text-align:center;">
 		    <input type="file" accept="image/*" name="image">
    		<button onclick = "upload(event)"  id="btnSubmit" >Upload</button>
    	</div>
</form>
<br>

<center>
<div class = "container">
	<div class="col1">
		<p>Image</p>
		<img id="uploadedImage" src="" >
	</div>
	<div class="col2">
		<p>Extracted Text</p>
		<div id = 'outputtext'></div>
	</div>
</div>
`
	}
}