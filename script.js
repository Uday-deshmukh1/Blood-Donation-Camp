document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        
        if (name && email && phone) {
            alert('Thank you for registering, ' + name + '! We will contact you at ' + email);
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
});