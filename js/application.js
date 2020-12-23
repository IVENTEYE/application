const applications = document.querySelectorAll('.application'),
      applicationSubmit = document.querySelectorAll('.application__form-submit');

applicationSubmit.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('data-href');

        if (id) {
            applicationSubmit.forEach(child => child.classList.remove('active'));
            applications.forEach(child => child.classList.remove('active'));
    
            item.classList.add('active');
            document.getElementById(id).classList.add('active');
        } 
        
    });
});