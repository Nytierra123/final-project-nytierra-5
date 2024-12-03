document.addEventListener("DOMContentLoaded", () => {
    const volunteerButtons = document.querySelectorAll('.volunteer-btn');
    const formContainer = document.getElementById("volunteerFormContainer");
    const cancelButton = document.getElementById("cancelForm");
    const volunteerForm = document.getElementById("volunteerForm");

    volunteerButtons.forEach(button => {
        button.addEventListener('click', () => {
            formContainer.style.display = "flex";  
        });
    });

    
    cancelButton.addEventListener('click', () => {
        formContainer.style.display = "none";  
    });

   
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for volunteering! We will be in touch soon.");
        formContainer.style.display = "none";  
    });
});
