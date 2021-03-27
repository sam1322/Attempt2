const url = 'http://localhost:8080/upload'
	const btnSubmit = document.querySelector('#btnSubmit')
	const out = document.querySelector('#outputtext')
	const upld = document.querySelector('#uploadedImage')
	let index= 0
	window.addEventListener('DOMContentLoaded', init)

	function init(){
		btnSubmit.addEventListener('click',upload)
	
	}

	async function upload(ev){
		ev.preventDefault()
		
		const formData = new FormData();
		const fileField = document.querySelector('input[type="file"]');
		upld.src = URL.createObjectURL(fileField.files[0]);
		// formData.append('username', 'abc123'); 
		formData.append('image', fileField.files[0]);
		console.log('this is form data ' ,formData)
		fetch(url, {
		  // mode: 'no-cors',
		  method: 'POST', 
		  body: formData
		}) 
		.then(res=>res.json())
		.then(result => {
			console.log('Success:', result)	
			out.textContent = result + index
			index++
		})
		.catch(error =>  console.error('Error:', error))

	}
