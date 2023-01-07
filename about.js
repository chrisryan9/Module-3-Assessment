console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const logo = document.querySelector('#logo');

logo.addEventListener('mouseover', () => {
	alert('How do you like my duck?')
});