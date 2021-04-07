const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const venue = document.getElementById('venue');
const date = document.getElementById('date');
const description = document.getElementById('description');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        venue: venue.value,
        date: date.value,
        description: description.value
    }
    let xhr =  new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'sucess'){
            alert('Email Sent! We will get back to you soon!');
            name.value = '',
            email.value = '',
            venue.value = '',
            date.value = '',
            description.value = ''
        }else {
            alert('Something Went Wrong')
        }
    }
    xhr.send(JSON.stringify(formData));

})