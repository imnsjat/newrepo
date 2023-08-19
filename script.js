document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:',number);
    console.log('Number:',date);
    // console.log('Number:',time);
  });