let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

const readMoreLink = document.querySelectorAll('.btn');
const hiddenText = document.querySelectorAll('.hidden-text');

readMoreLink.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    hiddenText[index].style.display = 'block';
    button.style.display = 'none';
  });
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('Full Name').value.trim();
    const email = document.getElementById('Email Address').value.trim();
    const number = document.getElementById('Mobile Number').value.trim();
    const message = document.getElementById('Email Subject').value.trim();
    const mess = document.getElementById('Your Message').value.trim();

    if (name === "" || email === "" || number === "" || message === "" || mess === "") {
        successMessage.innerText = 'Please fill out all fields';
    } else {
        const formData = new FormData();
        formData.append('entry.1223888305', name);
        formData.append('entry.1425237878', email);
        formData.append('entry.404252454', number);
        formData.append('entry.1893542905', message);
        formData.append('entry.433289646', mess);
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScHrz5BQFgEUrYFYD2d-tgOhtZ9L_kxQPBBqwiSXl2bI58t7A/formResponse', {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })
        .then((response) => response.text())
        .then((data) => {
            successMessage.innerText = 'Message sent successfully!';
        })
        .catch((error) => {
            successMessage.innerText = 'Error sending message';
        });
}
});


ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container,portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

const typed=new Typed('.text' ,{
    strings: ['Data Analyst', 'Data Scientist' , 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
