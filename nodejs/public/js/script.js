import Home from './views/home.js'
import AboutUs from './views/AboutUs.js'
import ContactUs from './views/ContactUs.js'
// import {UploadImage} from './views/UploadImage.js'
let index = 0
const url = 'http://localhost:8080/'


window.upload = function(ev){
	ev.preventDefault()
		
		const btnSubmit = document.querySelector('#btnSubmit')
		const out = document.querySelector('#output')
		const upld = document.querySelector('#uploadedImage')

		const formData = new FormData();
		const fileField = document.querySelector('input[type="file"]');
		
		document.querySelector('#uploadedImage').src = URL.createObjectURL(fileField.files[0]);
		// formData.append('username', 'abc123'); 
		formData.append('image', fileField.files[0]);
		console.log('this is form data ' ,formData)
		fetch(url+'upload', {
		  // mode: 'no-cors',
		  method: 'POST', 
		  body: formData
		}) 
		.then(res=>res.json())
		.then(result => {
			console.log('Success:', result)	
			const out =document.querySelector('#outputtext')
			out.textContent = result.data.text 
			const element = document.createElement('button')
			element.setAttribute('class','btnDownload')
			element.setAttribute('onclick','Download()')
			element.textContent = 'Download as PDF'
			console.log(element)
			document.getElementById('app').appendChild(element)
			index++

		})
		.catch(error =>  console.error('Error:', error))
	 
	}

window.Download = function(){
	// ev.preventDefault()
	// window.open('/download')
	fetch(url+'download')
  .then( res => res.blob() )
  .then( blob => {
    var file = window.URL.createObjectURL(blob);
    // window.location.assign(file);
	window.open(file, '_blank');
  });

}

window.Hello = function(event){
	console.log('hello')
}


const navigateTo = (url)=>{
	history.pushState(null,null,url)
	router()
}

const router = async ()  =>{
	// const routes = [
	// 	{ path:'/', view : ()=>console.log('Home')},
	// 	{ path:'/aboutus', view :()=>console.log('About us') },
	// 	{ path:'/contactus', view : ()=>console.log('Contact us')}
	// ]

	const routes = [
		{path:'/',view : Home },
		{path:'/aboutus' , view: AboutUs},
		{path:'/contactus' , view: ContactUs}
	]

	//Test each route for potential match
	const potentialMatches = routes.map(route=>{
		return{
			route:route,
			isMatch : location.pathname === route.path
		}
	})

	let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

	if(!match){
		match = {
			route :routes[0],
			isMatch:true
		}
	}

	const View = new match.route.view()

	document.querySelector('#app').innerHTML = await View.renderHTML()

	console.log(match.route)
	// console.log(match.route.view())
	console.log(potentialMatches)
	
}

	window.addEventListener('popstate' ,router)
	 
	 const atag = document.querySelectorAll('.nav__link')

	document.addEventListener('DOMContentLoaded',()=>{
		for(let i = 0 ; i < atag.length ;++i){
		atag[i].addEventListener('click' , e=>{
			if(e.target.matches('[data-link]')){
			// if(e.classList.contains('nav__link')){	
				e.preventDefault()
				navigateTo(e.target.href)
			}	
		})
	}
		router()

	}) 

 // function Hello(ev){
	// 	console.log('hi',ev)
	// }

	// window.addEventListener('DOMContentLoaded', init)

	// function init(){
		
// document.getElementById("MyId").addEventListener('click',upload)
	
// 	}

	

	// window.addEventListener('popstate' , (e)=>{
 //    	console.log(e)
	// })
